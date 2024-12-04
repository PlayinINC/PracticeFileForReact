import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/PracticeFileForReact/', // 리포지토리 이름이 포함되어야 함
  plugins: [react()],
});