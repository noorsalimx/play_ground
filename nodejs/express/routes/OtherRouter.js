const express = require('express');
const router = express.Router();
const { DOMParser } = require('xmldom');
const parser = new DOMParser();

const xml =
  '<xml xmlns="a" xmlns:c="./lite">\n' + '\t<child>test</child>\n' + '\t<child></child>\n' + '\t<child/>\n' + '</xml>';

router.get('/dom', async (req, res) => {
  try {
    const dom = await parser.parseFromString(xml, 'text/xml');
    res.send(dom);
  } catch (err) {
    console.error(err);
    res.send(err);
  }
});

module.exports = router;
