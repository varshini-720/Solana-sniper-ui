
window.onload = async function () {
  if (window.solana && window.solana.isPhantom) {
    try {
      const resp = await window.solana.connect();
      console.log('Connected with public key:', resp.publicKey.toString());
    } catch (err) {
      console.error('Wallet connection error:', err);
    }
  } else {
    alert('Phantom Wallet not found. Please open in Phantom browser.');
  }
};
