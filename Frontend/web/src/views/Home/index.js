
import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import * as S from './style'

import {
  Header,
  Footer,
  Filters,
  NewsCard,
  Modal,
} from '../../components'



function Home() {
    const [filterActive, setFilterActive] = useState('science')
    const [showModal, setShowModal] = useState(false)
    const [newsTitle, setNewsTitle] = useState("")
    const [news, setNews] = useState([])
    const [selectedNews, setSelectedNews] = useState({})

    async function loadNews() {
      await api.get(`/${filterActive}`)
        .then(response => setNews(response.data))
        .catch(error => {})
    }

    useEffect(() => {
        loadNews();
    }, [filterActive])

    return (
        <S.Container>
            <S.FilterAreaTop>
                <button type="button" onClick={() => setFilterActive('tech')}>
                    <Filters
                      title="TECHNOLOGY"
                      active={filterActive == "tech"}
                    />
                </button>

                <button type="button" onClick={() => setFilterActive('science')}>
                    <Filters
                      title="SCIENCE"
                      active={filterActive == "science"}
                    />
                </button>
            </S.FilterAreaTop>

            <Header />

            <S.Content>
                {
                    news.map((currentNews, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => {
                            setShowModal(true)
                            setSelectedNews(currentNews)
                          }}
                        >
                            <NewsCard
                              id={index}
                              url={currentNews.url}
                              when={currentNews.updated_date}
                              title={currentNews.title}
                              abstract={currentNews.abstract}
                            />
                        </button>
                    ))
                }
            </S.Content>


        <S.CloseModal  type="button"onClick={() => { setShowModal(false)}}>   
            <Modal
              showModal={showModal}
              news={selectedNews}
            />
            </S.CloseModal>
          
            <Footer />
        </S.Container>
    )
}

export default Home;
