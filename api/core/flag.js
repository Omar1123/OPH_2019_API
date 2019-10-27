module.exports = (req, res) => {

  try {

    let flag = req.body.flag;

    if(flag === "QEtlbkdlb18=") {
      console.log('Good Flag');
      res.json({ 'data': 'openhck{@ApI_M@st3r}' });
    } else {
      res.json({ 'data': 'Este no' });
      console.log('Bad Flag');
    }
  } catch(error) {
    res.json({ 'data': 'you forgot the parameter' });
  }
}
