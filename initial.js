const gitInfo = {
  branch: "main",
  status: "working tree clean",
  lastCommit: "Refactorizado el módulo de autenticación"
};

console.log("📦 Proyecto Git");
console.log(`🟢 Rama actual: ${gitInfo.branch}`);
console.log(`📂 Estado: ${gitInfo.status}`);
console.log(`📝 Último commit: "${gitInfo.lastCommit}"`);