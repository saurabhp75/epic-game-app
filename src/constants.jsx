// const CONTRACT_ADDRESS ='0x1545Cc3d566A427E16DC72F1c949CC3D9B4fa58C';

const CONTRACT_ADDRESS ='0x89ADaF422b184b479063F346D8f4ec6B9AC71178';

const transformCharacterData = (characterData) => {
  return {
    name: characterData.name,
    imageURI: characterData.imageURI,
    hp: characterData.hp.toNumber(),
    maxHp: characterData.maxHp.toNumber(),
    attackDamage: characterData.attackDamage.toNumber(),
  };
};

export { CONTRACT_ADDRESS, transformCharacterData };