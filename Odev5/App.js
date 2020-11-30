/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import NewsItem from './NewsItem.js';

const App: () => React$Node = () => {
  return (
      <SafeAreaView>
        <View><Text style={styles.bas}> Son Dakika! </Text></View>
        <ScrollView>
        <NewsItem type='saglik' title='Avrupa Rekoru!' description='Türkiye vaka sayıları olarak avrupada rekor kırdı'/>
        <NewsItem type='spor' title='Derbi Sonuçlandı' description='FB evinde Bjk ye mağluk oldu'/>
        <NewsItem type='saglik' title='Rusyada Konser' description='Rusyada Pandemi döneminde binlerce kişilik konser yapıldı!'/>
        <NewsItem type='siyaset' title='Hazine Bakanı Değişti!' description='Yeni Bakan yakında açıklanacak'/>
        <NewsItem type='spor' title='Müsabakalar Seyircisiz' description='Tüm spor müsabakalarının Seyircisiz olarak devam edeceği açıklandı'/>
        <NewsItem type='bilim' title='Elon Musk İkinci!' description='Elon Musk yaptığı projeler sonucu dünyada en zengin ikinci kişi olmayı başardı'/>
        <NewsItem type='saglik' title='Aşılar başlıyor!' description='CB Aşıların ücretsiz olarak yapılacağını duyurdu.'/>
        <NewsItem type='magazin' title='Reynmenin yeni yatırımı' description='Reynmen yeni projesinin isminin Houze olduğunu açıkladı.'/>
        </ScrollView>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bas:{
    fontSize: 40,
    fontWeight: "bold"
  }
});

export default App;
