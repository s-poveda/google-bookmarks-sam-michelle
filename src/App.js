import React, { Component } from 'react';
import './App.css';
import api from './api/api';
import SearchForm from './Components/SearchForm/SearchForm'
import BookDisplay from './Components/BookDisplay/BookDisplay';
class App extends Component {
	state = {
		filter: null,
		books: [{
            "kind": "books#volume",
            "id": "TRMaCAAAQBAJ",
            "etag": "UfBWyCyZ+2Y",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/TRMaCAAAQBAJ",
            "volumeInfo": {
                "title": "Henry I",
                "authors": [
                    "C. Warren Hollister"
                ],
                "publisher": "Yale University Press",
                "publishedDate": "2008-10-01",
                "description": "Henry I, son of William the Conqueror, ruled from 1100 to 1135, a time of fundamental change in the Anglo-Norman world. This long-awaited biography, written by one of the most distinguished medievalists of his generation, offers a major reassessment of Henry’s character and reign. Challenging the dark and dated portrait of the king as brutal, greedy, and repressive, it argues instead that Henry’s rule was based on reason and order. C. Warren Hollister points out that Henry laid the foundations for judicial and financial institutions usually attributed to his grandson, Henry II. Royal government was centralized and systematized, leading to firm, stable, and peaceful rule for his subjects in both England and Normandy. By mid-reign Henry I was the most powerful king in Western Europe, and with astute diplomacy, an intelligence network, and strategic marriages of his children (legitimate and illegitimate), he was able to undermine the various coalitions mounted against him. Henry strove throughout his reign to solidify the Anglo-Norman dynasty, and his marriage linked the Normans to the Old English line. Hollister vividly describes Henry’s life and reign, places them against the political background of the time, and provides analytical studies of the king and his magnates, the royal administration, and relations between king and church. The resulting volume is one that will be welcomed by students and general readers alike.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9780300143720"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "0300143729"
                    }
                ],
                "readingModes": {
                    "text": true,
                    "image": true
                },
                "pageCount": 576,
                "printType": "BOOK",
                "categories": [
                    "History"
                ],
                "averageRating": 5,
                "ratingsCount": 1,
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "0.0.1.0.preview.3",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=TRMaCAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=TRMaCAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=TRMaCAAAQBAJ&printsec=frontcover&dq=henry&hl=&cd=1&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=TRMaCAAAQBAJ&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=TRMaCAAAQBAJ"
            },
            "saleInfo": {
                "country": "US",
                "saleability": "FOR_SALE",
                "isEbook": true,
                "listPrice": {
                    "amount": 50,
                    "currencyCode": "USD"
                },
                "retailPrice": {
                    "amount": 40,
                    "currencyCode": "USD"
                },
                "buyLink": "https://play.google.com/store/books/details?id=TRMaCAAAQBAJ&rdid=book-TRMaCAAAQBAJ&rdot=1&source=gbs_api",
                "offers": [
                    {
                        "finskyOfferType": 1,
                        "listPrice": {
                            "amountInMicros": 50000000,
                            "currencyCode": "USD"
                        },
                        "retailPrice": {
                            "amountInMicros": 40000000,
                            "currencyCode": "USD"
                        },
                        "giftable": true
                    }
                ]
            },
            "accessInfo": {
                "country": "US",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.com/books/download/Henry_I-sample-epub.acsm?id=TRMaCAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.com/books/download/Henry_I-sample-pdf.acsm?id=TRMaCAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=TRMaCAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "The resulting volume is one that will be welcomed by students and general readers alike."
            }
        }]
	}

  render () {
			console.log(api.getBooks('john'));
			return (
    	<div className="App">
      	<header className="App-header">
  				<h1>Google Booksearch</h1>
      	</header>
				<SearchForm />
				<BookDisplay books={this.state.books}/>
    	</div>
  	);
	}
}

export default App;
