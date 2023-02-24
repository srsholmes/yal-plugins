import React, { useState } from 'react';

export const FileReader = () => {
  const [filePath, setFilePath] = useState(null);

  function handleFileChoose(e) {
    e.preventDefault();
    yal.dialog
      .open({
        multiple: false,
        filters: [{ name: 'Images', extensions: ['png', 'jpg', 'jpeg'] }],
      })
      .then((path) => {
        if (path) {
          const asset = yal.path.convertFileSrc(path as string);
          setFilePath(asset);
        }
      });
  }
  return (
    <div>
      <button className="bg-red-500 text-white p-2" onClick={handleFileChoose}>
        Choose file...
      </button>
      {filePath && (
        <div className="mt-4">
          <img src={filePath} />
        </div>
      )}
    </div>
  );
};
