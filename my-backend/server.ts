import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Rota para listar usuários
app.get('/todos', async (req, res) => {
  const todos = await prisma.todoList.findMany();
  res.json(todos);
});

// Rota para criar usuário
app.post('/todos', async (req, res) => {
  const { text, isCompleted } = req.body;

  try{
    const newTodo = await prisma.todoList.create({
      data: { text, isCompleted },
    });
    res.json(newTodo);
  } catch (error){
    res.status(404).json({message: 'Erro ao inserir tarefa'})
  }
});

app.delete('/todos/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedUser = await prisma.todoList.delete({
        where: {
          id: Number(id),
        },
      });
      res.status(200).json({ message: 'Tarefa deletada com sucesso!', deletedUser });
    } catch (error) {
      res.status(400).json({ error: 'Erro ao deletar a tarefa. Verifique se o ID é válido.' });
    }
  });

  app.put('/users/:id', async (req, res) => {
    const { id } = req.params; // Obtém o ID do usuário da URL
    const { isCompleted } = req.body; // Dados enviados no corpo da requisição
  
    try {
      const updatedUser = await prisma.todoList.update({
        where: {
          id: Number(id), // Converte o ID para número
        },
        data: {
          isCompleted,
        },
      });
      res.status(200).json({ message: 'Usuário atualizado com sucesso!', updatedUser });
    } catch (error) {
      res.status(400).json({ error: 'Erro ao atualizar o usuário. Verifique se o ID é válido e se os dados estão corretos.' });
    }
  });

app.get('/', (req, res) => {
    res.send('Servidor funcionando! Acesse /users para ver os usuários.');
  });

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
