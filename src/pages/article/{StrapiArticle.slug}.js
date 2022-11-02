import React from 'react'
import { graphql, Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import ClickableColumnName from 'components/article/ClickableColumnName'

function Article({ data }) {
    const article = data.strapiArticle

    return (
        <div className='grid grid-cols-5 gap-6'>
            <section className='col-span-full md:col-span-3 flex flex-col gap-4'>
                <GatsbyImage
                    image={getImage(article.cover.localFile)}
                    alt={article.cover.alternativeText}
                    loading='eager'
                    aspectRatio={16 / 9}
                    className='my-4 rounded-lg'
                />
                <div className='flex flex-row gap-4'>
                    <span
                        className='inline-block w-2 h-full rounded shrink-0
                    bg-gradient-to-b from-rhodonite-300 to-amethyst-300'
                    />
                    <span>
                        <ClickableColumnName column={article.column} />
                        <h1 className='text-neutral-900 mt-1'>{article.title}</h1>
                    </span>
                </div>

                <p className='font-looped text-body tracking-wide w-full text-left'>
                    อึ๋ม บอดี้เพาเวอร์แชมปิยอง ซากุระซีนีเพล็กซ์ฟรังก์ ไนน์ จ๊อกกี้คันถธุระพล็อตโปรเจกเตอร์เบญจมบพิตร
                    โกเต็กซ์สะบึมแต๋ว เซอร์โปรเจ็ค พาวเวอร์แจมเพลซซิมโฟนี่ฮากกา คณาญาติโฟล์คไฮแจ็ค เทรนด์หมายปองช็อปปิ้ง
                    เวณิกามินท์วีเจวิดีโอ เซนเซอร์เฟรม พันธุวิศวกรรมพุดดิ้งลามะชิฟฟอน พาเหรดมั้ง
                    ออร์แกนแชมเปญต่อยอดโปรดิวเซอร์ วาริชศาสตร์รีเสิร์ช ลาเต้ ตรวจทานลาเต้ไฮบริดวาซาบิแฮปปี้
                    วินมยุราภิรมย์โอเปอเรเตอร์ตุ๊กตุ๊กจิตพิสัย พุดดิ้งฟรังก์ โค้ก บราอวอร์ดทาวน์เฮาส์มอคคา แจ๊กพ็อต
                    วอลซ์ ครูเสด จีดีพีไฟต์แอคทีฟ เปียโนเอ็นเตอร์เทนอิสรชนรายชื่อ เอ็กซ์เพรสเดอะสป็อตไวกิ้ง
                    โกลด์ไนน์เซอร์ไพรส์ ครัวซองมินต์โค้กรีพอร์ทไอเดีย แจ๊กเก็ต แซลมอนสตีลฮีโร่ล้มเหลวเทรนด์
                    ฟลุตสไปเดอร์บุญคุณว้อดก้า โจ๋พุทธภูมิมาม่า นิรันดร์เฟิร์มเก๊ะ คอลเล็กชั่น
                </p>
            </section>
        </div>
    )
}

// TODO author query in separate component
export const query = graphql`
    query ($id: String) {
        strapiArticle(id: { eq: $id }) {
            title
            publishedAt
            cover {
                alternativeText
                localFile {
                    childImageSharp {
                        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                    }
                }
            }
            column {
                title
                slug
            }
            tags {
                title
            }
            # blocks {
            #         ...Blocks
            # }
        }
    }
`

export default Article
