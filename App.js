import React, { Component } from 'react';
import { Alert, Text, TouchableOpacity, View, PermissionsAndroid } from 'react-native';

import { PDFDocument, PDFPage } from 'react-native-pdf-lib';
import RNFetchBlob from 'react-native-fetch-blob';

export default class App extends Component {

  componentDidMount() {
    PermissionsAndroid.request;
    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
  }

  createAndDownloadPdf = async () => {

    const boletoTpl = PDFPage
      .create()
      .setMediaBox(230, 340)
      .drawText('Template de boleto', { x: 10, y: 320, color: '#007384' })
      .drawRectangle({ x: 10, y: 25, width: 1, height: 50, color: '#000000' })
      .drawRectangle({ x: 12, y: 25, width: 1, height: 50, color: '#000000' })
      .drawRectangle({ x: 14, y: 25, width: 1, height: 50, color: '#000000' })
      .drawRectangle({ x: 16, y: 25, width: 1, height: 50, color: '#000000' })
      .drawRectangle({ x: 18, y: 25, width: 1, height: 50, color: '#000000' })
      .drawRectangle({ x: 20, y: 25, width: 1, height: 50, color: '#000000' })
      .drawRectangle({ x: 22, y: 25, width: 1, height: 50, color: '#000000' })
      .drawRectangle({ x: 26, y: 25, width: 1, height: 50, color: '#000000' })
      .drawRectangle({ x: 28, y: 25, width: 1, height: 50, color: '#000000' })
      .drawRectangle({ x: 30, y: 25, width: 1, height: 50, color: '#000000' })
      .drawRectangle({ x: 32, y: 25, width: 1, height: 50, color: '#000000' })
      .drawRectangle({ x: 34, y: 25, width: 1, height: 50, color: '#000000' })
      .drawRectangle({ x: 36, y: 25, width: 2, height: 50, color: '#000000' })
      .drawRectangle({ x: 38, y: 25, width: 1, height: 50, color: '#000000' })
      .drawRectangle({ x: 40, y: 25, width: 1, height: 50, color: '#000000' })
      .drawRectangle({ x: 42, y: 25, width: 1, height: 50, color: '#000000' })
      .drawRectangle({ x: 44, y: 25, width: 1, height: 50, color: '#000000' })
      .drawRectangle({ x: 46, y: 25, width: 1, height: 50, color: '#000000' })
      .drawRectangle({ x: 48, y: 25, width: 1, height: 50, color: '#000000' })

    const dirs = RNFetchBlob.fs.dirs;
    const dir = dirs.DownloadDir;

    const val1 = Math.floor(100000 + Math.random() * 999999);
    const val2 = Math.floor(10000 + Math.random() * 99999);
    const fileName = (val1 + val2).toString();

    await PDFDocument
      .create(dir + `/multify-boleto-${fileName}.pdf`)
      .addPages(boletoTpl)
      .write()
      .then(path => {
        console.log('PDF created at: ' + path)
        Alert.alert('Boleto salvo com sucesso');
      })
      .catch(e => console.log('Erro ao salvar pdf: ', e));
  }

  render() {
    return <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center', }}>
      <TouchableOpacity onPress={this.createAndDownloadPdf} style={{ borderWidth: 1, borderColor: '#DDD', padding: 5 }}>
        <Text>Download PDF</Text>
      </TouchableOpacity>
    </View>
  }
}

