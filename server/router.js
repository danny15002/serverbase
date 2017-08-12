function router(req, res) {
  const url = req.url;

  switch (url) {
    case '/dickseverywhere':
      res.write('hooray');
      break;
    default:
      res.write('where the dicks at');
  }
  res.end();
}

module.exports = router;
