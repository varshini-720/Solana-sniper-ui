
function extractMint() {
  const url = document.getElementById("listingUrl").value.trim();

  let mint = "";

  try {
    const magicEdenMatch = url.match(/\/item-details\/([A-Za-z0-9]{32,})/);
    const tensorMatch = url.match(/\/asset\/[^\/]+\/([A-Za-z0-9]{32,})/);

    if (magicEdenMatch) {
      mint = magicEdenMatch[1];
    } else if (tensorMatch) {
      mint = tensorMatch[1];
    } else {
      alert("Mint address not found in URL");
      return;
    }

    document.getElementById("mintAddress").value = mint;
  } catch (e) {
    alert("Invalid URL format");
  }
}

async function snipe() {
  const mint = document.getElementById("mintAddress").value;
  if (!mint) return alert("Mint address not found!");

  const response = await fetch('https://your-backend-url/snipe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mint }),
  });

  const result = await response.json();
  alert(result.message || "Snipe sent!");
}
