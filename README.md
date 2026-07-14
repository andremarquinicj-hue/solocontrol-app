# Solocontrol — Controle Tecnológico de Usina de Asfalto

App de controle de qualidade para usina de massa asfáltica: registro rápido de cargas
(temperatura, placa, tonelagem e fotos com horário automático), ensaios de laboratório
(teor de ligante e granulometria) com validação automática conforme **DNIT 031/2006-ES**,
geração de **relatório diário consolidado** e **boletim por caminhão** com análise técnica
automática, e **histórico de relatórios arquivados** consultável por data.

## Stack
- React 18 + Vite
- Armazenamento local (localStorage) — pronto para migrar para Firebase/Firestore

## Rodar localmente
```bash
npm install
npm run dev
```

## Build de produção
```bash
npm run build
```

## Deploy
Conectar o repositório na [Vercel](https://vercel.com) — detecção automática (Vite).

## Funcionalidades
- ✅ Lançamento de cargas com hora automática e status LIBERADA/RETIDA (150–177 °C)
- ✅ Teor de ligante com tolerância ±0,3% (Rotarex / Ignição / Soxhlet)
- ✅ Granulometria Faixas A/B/C com faixa de trabalho (±7/5/3/2%)
- ✅ Fotos comprimidas automaticamente (máx. 750px)
- ✅ Relatório diário e boletim por carga com exportação em PDF (imprimir)
- ✅ Análise técnica redigida automaticamente a partir dos dados
- ✅ Histórico: arquive o dia e consulte relatórios antigos por data

> Valores de referência conforme DNIT 031/2006-ES. Confirmar sempre com o projeto executivo da obra.
