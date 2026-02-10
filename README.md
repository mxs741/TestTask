# Запуск

## 1. Клонирование репозитория

```bash
git clone git@github.com:mxs741/TestTask.git

cd TestTask
```

## 2. Сборка Docker-образа и запуск контейнера

```bash
sudo docker build -t test-task . && sudo docker run -p 3000:3000 test-task
```

Если порт 3000 занят, необходимо указать другой (напр. 8080:3000)

## 3. Остановка контейнера

Узнать ID контейнера

```bash
docker ps
```

Остановить

```bash
docker stop <container_id>
```
