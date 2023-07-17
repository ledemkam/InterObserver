import { useRef } from "react"
import  './container.css'
import { useEffect } from "react"

const Container = () => {

  const newsLetterRed = useRef()
  useEffect(()=>{
    const observer = new IntersectionObserver(entries => {console.log(
      entries)
    if(entries[0].isIntersecting){
      newsLetterRed.current.classList.add("active")
      observer.unobserve(newsLetterRed.current)

    }
    })
      observer.observe(newsLetterRed.current)

      return() =>{
        observer.unobserve(newsLetterRed.current)
      }
  },[])
  return (
    <div className="container">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus pariatur quo rem quod aliquam! Eos, blanditiis. Facere ipsam laboriosam, quis ab voluptatum porro ex, repudiandae, iste labore hic minima dicta!
        Culpa illo modi enim animi rerum alias quo non neque aspernatur illum repellendus tenetur officiis nemo vel esse, itaque saepe nihil, ipsum ipsam atque deleniti. Fuga libero dolor rem molestias.
        Nostrum incidunt recusandae velit quos eius, iure sed commodi inventore esse accusantium eligendi, excepturi debitis placeat cupiditate officiis praesentium eos fugiat aliquam ipsa modi reiciendis tempora. Doloribus cupiditate veniam reprehenderit!
        Quaerat cupiditate obcaecati molestias nemo saepe repellendus atque reiciendis excepturi! Vitae non exercitationem quas, sint tempora repellat aliquam molestias vel eum sapiente, magni, libero possimus consectetur accusantium et praesentium. Temporibus.
        Doloribus sed tempore dolor rerum, delectus corporis expedita sapiente eos ullam, unde laborum, labore excepturi cupiditate laboriosam placeat. Nulla consectetur corrupti exercitationem doloremque laudantium ab eligendi quod atque illo veniam?
        Suscipit, necessitatibus in, eligendi facilis voluptates natus reiciendis, assumenda dignissimos non quas pariatur accusamus magnam illum voluptatum earum cumque asperiores. Perspiciatis libero quas animi quisquam. Culpa esse quae nulla impedit?
        Qui adipisci sint provident! Ducimus, expedita quo. Facilis quae laudantium saepe dicta perspiciatis omnis numquam itaque at ratione id, delectus cupiditate. Quisquam possimus at esse dolorem accusamus, blanditiis optio atque?</p>
     <h1>para2</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maxime dolor culpa eligendi eum velit, corrupti veniam vero eveniet, a sapiente officiis ratione error quam perspiciatis est quod repellendus at?
     Dolorem exercitationem architecto, harum expedita totam saepe iste quo illo quos fugit? Excepturi dignissimos libero debitis ducimus facilis ex omnis sint, quis earum, eligendi maiores harum officia unde amet recusandae?
     Quam earum voluptatem maiores quod cum? Dolore numquam quae repellendus sint! Molestiae, consectetur. Perferendis animi suscipit, minus odio hic commodi doloribus aspernatur porro deleniti, incidunt, alias voluptates. Aut, atque perspiciatis?
     Consequuntur, nobis incidunt similique natus impedit quisquam possimus atque omnis consectetur laudantium nemo sint repellendus quis veniam aperiam velit placeat architecto earum voluptatem iste recusandae? Nam architecto asperiores hic repellendus?
     Ab deserunt quasi necessitatibus ut consectetur sed porro expedita quas. Qui commodi ipsa esse veniam optio ad numquam itaque quibusdam magni inventore consequuntur ea soluta reiciendis nihil, earum natus! Nesciunt!
     Dolorum nulla, quo accusantium doloremque quasi veritatis quisquam et nostrum vel unde aperiam vero quibusdam commodi deleniti fugit tempora, hic in nesciunt? Fugiat quidem, tempora alias quasi eligendi ipsum doloremque.
     Esse aut adipisci illum accusamus perspiciatis aliquam aliquid fuga architecto enim sit natus id odit, quas ullam ad nobis! Quos consectetur natus provident error iste eveniet doloribus debitis numquam quas.
     Voluptatum incidunt numquam excepturi sit? Id modi quaerat eveniet asperiores enim doloribus obcaecati iusto aspernatur repellat iste hic quos recusandae porro, accusantium accusamus repellendus, voluptatem alias at neque atque facilis.
     Debitis, sunt. Inventore est tempora minima dolorum temporibus quisquam ut reiciendis. Consequatur necessitatibus tempore aut qui doloribus vitae tenetur voluptatem, neque in laudantium, molestias velit earum, debitis nihil deleniti magnam!
     Nam eum, veniam laboriosam, earum et iure totam sunt illum ipsam error iste voluptatum, suscipit quo debitis velit fuga in rerum minima nihil deserunt modi a sapiente optio veritatis! Iure.</p>
     <h2 ref={newsLetterRed} className="newsletter">para3</h2>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, mollitia? Odit ipsum possimus fugit sed impedit consequuntur, expedita voluptatibus laudantium illo, voluptates blanditiis deserunt dolorum molestiae est consectetur, eius soluta?
     Eveniet rem ipsam modi dolores distinctio voluptate doloribus sit libero soluta dolorem laboriosam minus quidem neque esse ad sed adipisci, cum perferendis reiciendis, officiis quasi nam corporis, accusamus vero. Asperiores!
     Esse perferendis facilis tempore porro ex sequi exercitationem, labore quasi suscipit iste minus voluptate iure vero deserunt enim sapiente molestiae aliquid unde laboriosam aliquam? Aliquam deserunt beatae saepe odit nihil!
     Nulla consequatur alias vel harum! Blanditiis est iste voluptatibus nostrum vitae quibusdam alias magnam atque sint velit adipisci, unde quaerat quasi illo. Exercitationem unde eligendi corporis officia delectus, tempore tempora!
     Velit neque molestiae quidem repellat aperiam aliquam unde sunt tempore maxime impedit in eum iure totam, perspiciatis, pariatur eius ipsam a vitae sapiente doloremque! Earum ea error quia exercitationem numquam.
     Eaque a fugit tempore est cum sunt modi pariatur, perspiciatis in, aut dolorum dicta nihil eos illum cupiditate nam quis iusto facere recusandae voluptate. Quisquam pariatur sint commodi neque eaque.
     Repellendus hic amet eveniet, illum nulla atque quod perspiciatis eum nisi accusamus veritatis iusto, laboriosam odit. Omnis exercitationem aut ipsam delectus corrupti architecto dolor, rem veritatis repellendus iste aliquam voluptatem?
     Fuga maxime quod voluptates assumenda quaerat expedita nesciunt dolore delectus explicabo, eveniet porro nam accusamus molestiae harum perspiciatis possimus nostrum labore deserunt autem totam. Autem deleniti dolore ab velit iusto.</p>
     <h3>parahhbn</h3>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel in voluptas a, aut corporis reiciendis pariatur error, quasi quis architecto veniam ea repellat. Sit amet, nobis culpa porro perspiciatis quia.
     Dolore sit, distinctio, libero exercitationem, amet repellat blanditiis delectus recusandae consequuntur obcaecati esse dolor? Adipisci corrupti minus rem nam harum veritatis soluta, architecto suscipit obcaecati libero iste consectetur nostrum distinctio.
     Sed dolor nemo maiores harum porro? Ab suscipit saepe reiciendis in. Earum doloremque dolorum blanditiis impedit laudantium in eum ratione totam soluta ducimus? In ab est laudantium? Dolores, voluptatem fuga!
     Dicta quaerat porro voluptatibus ex cupiditate libero. Placeat ipsa praesentium excepturi explicabo ipsum officia labore, facilis voluptates aliquid odit quaerat unde maiores neque accusamus atque beatae! Quidem adipisci nihil quae?
     Culpa quos, perspiciatis in numquam sit autem doloribus voluptates. Unde sit nihil, rem nobis blanditiis omnis distinctio, nostrum assumenda voluptatum, vitae incidunt dolore error perferendis natus accusantium ipsam. Ex, accusantium!
     Qui temporibus esse cum. Autem repellat optio ducimus reprehenderit earum assumenda quas temporibus beatae distinctio esse dolorem, excepturi modi ipsam magni quis ad amet ratione saepe fuga! Eius, esse veritatis.
     Est consequuntur ab quibusdam vitae ut, rerum ipsa delectus neque amet ipsam consectetur sunt dicta sit provident libero exercitationem natus perferendis molestiae, odit, vero perspiciatis temporibus! Eos unde et accusantium.
     Expedita nesciunt odit illo ipsa optio possimus vero sunt voluptates quo dolore, nihil dolor eaque eos earum vitae culpa distinctio quod maiores iure doloribus laudantium error numquam totam maxime! Eligendi?
     Ullam excepturi eos modi maiores. Quo aliquam iste numquam, eius odio cumque delectus impedit, voluptatum recusandae voluptas porro quasi magnam! Quia tempora porro repellendus aliquam rem molestiae veniam ab neque!
     Magnam culpa perspiciatis explicabo debitis eius quam, praesentium tempore sequi natus ullam voluptate est in quisquam obcaecati velit neque beatae deleniti labore nihil libero nulla similique sed. Veniam, magnam doloremque.</p>
    </div>

  )
}
export default Container