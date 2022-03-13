module.exports = {
  apps: [
    {
      name: "shopping-insight", // pm2 목록에서 보여질 프로세스 이름
      script: "./index.js", // pm2로 실행될 파일 경로
      watch: true, // 파일이 변경되면 자동으로 프로세스 재실행 (true || false)
      // ignore_watch: ["uploads"], // 변경 내용을 감시하지 않을 파일 혹은 폴더 이름
      env: {
        NODE_ENV: "production", // --env [env name]를 명시하지 않았을 때의 기본 환경
      },
      env_development: {
        NODE_ENV: "development", // 개발환경에 적용될 설정
        // PORT: 4000,
      },
      env_production: {
        NODE_ENV: "production", // 배포환경에 적용될 설정
        // PORT: 443,
      },
    },
  ],
};
