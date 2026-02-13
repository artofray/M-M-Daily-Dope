// This represents a simulated interaction with the NEAR blockchain

export const connectNearWallet = async (): Promise<{ accountId: string; balance: number }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        accountId: 'music_machine.near',
        balance: 450.25
      });
    }, 1200);
  });
};

export const mintSongNFT = async (songId: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`contract-${songId}-${Math.random().toString(36).substr(2, 9)}.near`);
    }, 3000);
  });
};

export const distributeSong = async (songId: string): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
};
