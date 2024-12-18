# Rodando o Backend com Prisma no Docker

## Para rodar o backend:

### 1. **Instalar as dependências**
No terminal, navegue para a pasta do backend:
```bash
cd my-backend
```
Em seguida, instale as dependências:
```bash
npm install
```

### 2. **Configurar o banco de dados**
Certifique-se de que o Docker está instalado e funcionando no seu sistema. Depois, suba o container do banco de dados postgres:latest utilizando o Docker. Adicione as seguintes configurações:

- Host Port: 
  - 5432

- Evironment variables:
  - POSTGRES_USER: "SEU_USER"
  - POSTGRES_PASSWORD: "SUA_SENHA"

### 3. **Rodar as migrations no banco**
Certifique-se de que o arquivo `.env` está configurado corretamente com a variável `DATABASE_URL`. Então, aplique as migrations ao banco de dados:

Exemplo .env:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/mydatabase"
```

```bash
npx prisma migrate dev
```

### 4. **Gerar o Prisma Client**
Gere o Prisma Client para conectar ao banco de dados:
```bash
npx prisma generate
```

### 5. **Iniciar o servidor**
Finalmente, rode o servidor backend:
```bash
npm run dev
```

---

## Comandos úteis para o Docker:

- **Verificar se o container está rodando:**
  ```bash
  docker ps
  ```

- **Parar o container:**
  ```bash
  docker-compose down
  ```

- **Reiniciar o container:**
  ```bash
  docker-compose restart
  ```

---

## Problemas comuns:

### **Erro de conexão com o banco:**
   - Verifique se o container do banco de dados está rodando (`docker ps`).
   - Confirme se a variável `DATABASE_URL` no `.env` está correta.

---

Se precisar de mais informações ou ajustes, consulte a documentação oficial do Prisma ou Docker.


# Rodando o Frontend

## Para rodar o frontend:

### 1. **Instalar as dependências**
```bash
npm install
```

### 2. **Iniciar projeto**
```bash
npm run dev
```