const emojis = [];
for (let i = 0x1f600; i <= 0x1f64f; i++) {
  // Range for a subset of emojis (smileys & people)
  emojis.push(String.fromCodePoint(i));
}

// You can add more ranges for other categories of emojis
for (let i = 0x1f300; i <= 0x1f5ff; i++) {
  // Range for symbols & pictographs
  emojis.push(String.fromCodePoint(i));
}

document.getElementById("emojis").textContent = emojis.join(" ");
