exports.getHandler = (req, res) => {
    res.status(200).json({ operation_code: 1 });
  };
  
  exports.postHandler = (req, res) => {
    const { data, file_b64 } = req.body;
  
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
  
    const highestLowercase = alphabets
      .filter(char => char === char.toLowerCase())
      .sort()
      .slice(-1);
  
    let fileValid = false;
    let fileMimeType = "";
    let fileSizeKb = "";
  
    if (file_b64) {
      try {
        const buffer = Buffer.from(file_b64, 'base64');
  
        fileMimeType = "image/png"; 
        fileSizeKb = (buffer.length / 1024).toFixed(1); 
        fileValid = true;
      } catch (error) {
        fileValid = false;
      }
    }
  
    res.status(200).json({
      is_success: true,
      user_id: "omraj_kamat_14102003",
      email: "ob2614@srmist.edu.in",
      roll_number: "RA2111003011168",
      numbers: numbers,
      alphabets: alphabets,
      highest_lowercase_alphabet: highestLowercase,
      file_valid: fileValid,
      file_mime_type: fileMimeType,
      file_size_kb: fileSizeKb,
    });
  };
  