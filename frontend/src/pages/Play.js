import "../assets/css/templates/play.scss";
import GameFooter from "../components/organisms/game/Footer";
import Logo from "./../components/atoms/Logo";
import Button from "./../components/atoms/Button";
import SocialMedia from "./../components/molecules/SocialMedia";
import metaLogo from "./../assets/img/zorro.png";
export default function PlayPage() {
  return (
    <>
      <main>
        <div className="game-window">
          {/*  */}
          <div className="game-dialog">
            {/* <GameInit /> */}
            {/* <MetaMaskLogin /> */}
            {/* <MetaMaskRegister /> */}
            {/* <GameLogin /> */}
            <GameTermsAndConditions />
            {/* <GameRecover /> */}
            {/* <GameLoading /> */}
          </div>
          {/*  */}
        </div>
        <GameFooter />
      </main>
    </>
  );
}
export function GameInit() {
  return (
    <>
      <Logo />
      <div className="dialog-actions">
        <Button>PLAY</Button>
      </div>
      <div className="game-dialog-text-area">battle - collect - earn</div>
      <SocialMedia />
    </>
  );
}
export function GameLoading() {
  return (
    <>
      <Logo className="img-fluid" />
    </>
  );
}
export function MetaMaskLogin() {
  return (
    <>
      <div className="game-dialog-white-border-box">
        <h1>Entrar</h1>
        <Button>
          <img src={metaLogo} alt="Ingresar con MetaMask" />
        </Button>
      </div>
    </>
  );
}
export function MetaMaskRegister() {
  return (
    <>
      <div className="game-dialog-whiter-border-box">
        <div className="box-top-title-actions">
          <div className="flex-wrapper">
            <div className="box-title">Registro</div>
            <div className="box-actions">
              <a href="/" className="red-link">
                Cerrar
              </a>
            </div>
          </div>
          <div className="box-title-desc">
            <p>
              Parece que no estas registrado aun por motivos de seguridad
              inserta una clave
            </p>
          </div>
        </div>
        <div className="game-dialog-register-form">
          <form>
            <input type="text" className="withMetaIcon" placeholder="CARRERA" />
            <input type="text" placeholder="email" />
            <input type="text" placeholder="repite email" />
            <input type="password" placeholder="contraseña" />
            <input type="password" placeholder="repite contraseña" />
            <div className="terms-check">
              <input type="checkbox" />
              <span>He Leido y acepto los términos</span>
            </div>
            <Button className="w-full">Guardar</Button>
          </form>
        </div>
      </div>
    </>
  );
}
export function GameLogin() {
  return (
    <>
      <div className="game-dialog-whiter-border-box">
        <div className="box-top-title-actions">
          <div className="flex-wrapper">
            <div className="box-title">Entrar</div>
            <div className="box-actions">
              <a href="/" className="red-link">
                Cerrar
              </a>
            </div>
          </div>
        </div>
        <div className="game-dialog-register-form">
          <form>
            <input type="text" className="withMetaIcon" placeholder="CARRERA" />
            <input type="password" placeholder="contraseña" />
            <div className="terms-check">
              <span className="red-link">Olvidaste la contraseña?</span>
            </div>
            <Button className="w-full">ENTRAR</Button>
          </form>
        </div>
      </div>
    </>
  );
}
export function GameTermsAndConditions() {
  return (
    <>
      <div className="game-dialog-terms-and-coditions">
        <div className="box-top-title-actions">
          <div className="flex-wrapper">
            <div className="box-title-terms">TERMINOS Y CONDICIONES</div>
          </div>
        </div>
        <div className="game-dialog-register-form">
          <form>
            <div className="scroll-container-terms">
              <div>Exclusión de responsabilidad</div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam,
              quas porro placeat eum deserunt, in nam debitis amet
              necessitatibus nostrum dolorum accusamus sapiente magni nihil sunt
              soluta adipisci, mollitia dicta! Dicta mollitia aliquid facilis.
              Cum cumque quaerat rem atque, incidunt quae aliquam fugiat harum
              ut dignissimos iure sint officia voluptatum illo nostrum
              exercitationem vitae deleniti! Laudantium cum sed eum repellendus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sed
              aliquam labore sint voluptate tenetur laboriosam animi eos
              repellat asperiores possimus illo itaque iusto nisi accusantium,
              voluptates corporis, quaerat rerum! Quod magnam porro aspernatur
              quidem consequatur ullam debitis exercitationem! Tempora, natus
              quibusdam ratione quaerat voluptatum doloremque, deserunt illum
              quae eligendi ipsum iste eos similique? Debitis modi beatae non
              reprehenderit quidem? Obcaecati voluptate eum dolor omnis
              laudantium deserunt perferendis quis, cupiditate nesciunt quae.
              Natus non suscipit atque magni repellat iste aut eum
              exercitationem eos repellendus, dignissimos voluptates pariatur,
              doloremque beatae dolorem! Laboriosam possimus vel voluptatum
              eligendi, vitae voluptatibus. Sapiente, animi distinctio. Harum
              rem perferendis aut maxime mollitia facilis, dolore voluptate
              quidem! Facilis ex, architecto maiores minima in fugit ipsa
              similique odio! Ipsa, possimus soluta. Asperiores sequi repellat
              laboriosam cum sit molestiae blanditiis, inventore ipsum incidunt
              saepe nulla vero eaque adipisci accusamus est reiciendis
              repudiandae obcaecati error? Asperiores illo corrupti sapiente
              odit? Nulla iusto totam labore deserunt nihil eum animi,
              consequatur laudantium corrupti quod nobis nisi quisquam error
              corporis molestiae harum possimus voluptate optio quaerat quae non
              sunt mollitia distinctio. Quia, impedit! At commodi non molestiae
              sed eligendi doloribus ex rerum autem eius fugiat ipsam, nisi
              possimus suscipit aspernatur. Voluptates quo nulla voluptatem est
              sapiente porro necessitatibus facilis odit cum. Praesentium,
              doloribus? Corrupti, perferendis dolores ipsa ratione nemo
              similique suscipit tenetur voluptates dolor magni rerum reiciendis
              quia exercitationem distinctio porro repellendus modi culpa itaque
              repellat vel animi nisi. Itaque ab dolorum omnis. Accusantium at,
              quidem sint quaerat vitae molestiae modi quia impedit dolorem
              consequatur architecto dolorum odit nulla quis. Hic est
              perferendis corporis consequuntur explicabo, doloribus totam
              numquam, a, vero minus minima? Distinctio quia magni ad velit
              necessitatibus reiciendis maiores, amet sunt nemo quam provident
              magnam, placeat omnis illo voluptates ea impedit quisquam cumque
              commodi temporibus dignissimos nulla nam iusto vero. Odit. Nostrum
              quaerat nobis distinctio dolor debitis labore accusantium quae,
              sed aut eveniet nam voluptatem autem maxime velit non molestiae
              eum hic sint facilis blanditiis eos qui temporibus. Officiis,
              omnis excepturi? Qui aut placeat, dolore aspernatur, non quasi
              alias repellat, dicta rem doloribus minus sed impedit blanditiis
              ducimus vitae. Excepturi quaerat aliquid voluptatibus dignissimos
              ab ad repellat, blanditiis quo veniam saepe. Inventore ducimus
              dolorum, aut autem repudiandae eaque voluptatibus sed odit fugit
              cupiditate, voluptatem pariatur magnam accusamus dolore ipsum
              neque fuga amet facilis reprehenderit accusantium officiis
              voluptatum! Qui suscipit expedita corporis! Earum at, consequatur
              atque ullam maiores officia perspiciatis. Quia fuga optio
              expedita. Quidem in reiciendis accusamus blanditiis, ex earum
              soluta perspiciatis ea, voluptatibus obcaecati, incidunt sit vitae
              alias iure illo! Aperiam accusantium tempore ipsam voluptatibus
              esse ut deserunt ipsa iste. Quidem dolore odio quas, numquam omnis
              porro, laborum libero tempora perferendis obcaecati ex nobis fuga
              at. Explicabo fuga recusandae dolorum? Veniam repudiandae ab
              dolorum? Quia animi molestias, sint aperiam blanditiis at esse
              dolores neque unde dolore alias similique temporibus atque
              possimus earum rem ut doloremque culpa architecto recusandae
              consectetur eum. Magni cupiditate veniam atque fugit recusandae
              sunt quaerat impedit debitis quia sequi consequatur magnam, fuga,
              error numquam. Quos vitae fugiat optio obcaecati similique, minima
              quas eaque exercitationem quam perferendis iure. Nemo molestias
              amet omnis? Eum eveniet enim fugit autem eligendi placeat dolores,
              debitis fuga nemo. Quos consequuntur vitae temporibus, libero
              ipsam ullam explicabo sapiente laborum, ducimus commodi accusamus
              ad. Eum. Necessitatibus dolore dicta nobis ab earum illo
              exercitationem sunt enim eligendi quae! Harum libero fugit debitis
              deleniti, corporis ratione, ducimus perspiciatis asperiores cum
              dignissimos, repellat explicabo quia cupiditate deserunt hic.
              Dolorem atque velit tenetur laboriosam, quia perspiciatis numquam
              omnis ipsam totam autem dicta! Similique deserunt sed architecto
              eveniet dolorem? Pariatur, dicta! Pariatur iste maiores labore
              tenetur inventore soluta exercitationem nesciunt! Aliquam
              provident doloremque quisquam sed odio aut eos accusamus natus
              tempore incidunt! Tempora fugiat voluptate ipsa officia maxime
              iure, sequi hic adipisci quia doloremque est totam beatae?
              Laborum, dolore animi? Officiis eos reprehenderit nesciunt
              consequuntur eveniet eum, dolorem quidem numquam, excepturi veniam
              similique itaque suscipit animi recusandae vitae delectus
              cupiditate? Beatae aliquam minus ducimus autem maxime deleniti
              laboriosam sint odit. Molestiae ratione autem veritatis quos
              placeat numquam voluptas possimus nobis sint rerum corrupti illo
              perferendis similique atque nam, amet voluptatem iure pariatur
              exercitationem quas dolores voluptatibus sequi tempore! Quidem,
              quasi. Excepturi reiciendis quaerat accusantium sed, eum voluptas
              vel est odio veritatis ipsam molestias ut iusto placeat deserunt
              eveniet dolorem hic tenetur eaque magni aut cum omnis vitae. Nisi,
              fugiat quo. Officiis corrupti quia blanditiis laudantium suscipit
              ea perspiciatis et laborum voluptate labore harum, aperiam
              temporibus aspernatur autem voluptates dolorem atque molestias aut
              quos natus fugit porro. Eius expedita pariatur totam. Cupiditate
              eum a dolore quas esse accusantium aperiam necessitatibus
              accusamus deleniti temporibus ipsa sequi adipisci, quis quasi
              assumenda maiores iste enim molestiae voluptate tempora earum odio
              atque? Nemo, incidunt omnis? Facere doloremque dignissimos quae
              qui ea aspernatur, labore, deserunt dolorum ipsum quam odio
              officiis at aliquid libero nostrum dolore quasi accusantium
              distinctio reiciendis voluptate expedita. Eos delectus fuga
              dignissimos quod? Libero, atque minus! Aliquam exercitationem
              aperiam et excepturi! Dolorum, fugit atque! Provident quod
              quaerat, quibusdam atque facere ad ut optio dicta at corporis
              beatae fugit, quas inventore laudantium est vel! Ipsa molestias,
              commodi aliquid delectus quia accusantium similique corporis
              aperiam aliquam nihil laudantium est inventore tenetur maiores.
              Iure odit cupiditate tenetur repellat aliquid temporibus expedita
              praesentium repudiandae, maxime vel voluptate? Voluptatum impedit
              quis, quasi porro tempora architecto, delectus harum fugiat quo et
              dolorum, sint beatae ullam! Earum recusandae voluptas possimus qui
              consequatur distinctio, blanditiis doloribus eum veniam,
              aspernatur voluptatibus! Vel. Deserunt quos harum nesciunt qui
              omnis adipisci tempore doloribus earum exercitationem? Eveniet
              similique eius, fugit unde id amet et voluptatem impedit, ea
              aliquid obcaecati ullam corporis eligendi esse mollitia fuga? Ea,
              veniam, provident eaque aut nesciunt ex velit a perspiciatis modi
              aliquid blanditiis esse consequatur error. Ratione quis id maiores
              a doloribus nemo animi voluptatibus, deserunt aliquam, recusandae
              dolor sequi. Necessitatibus rerum nemo voluptatem aliquid, quos,
              repudiandae minus officiis fugiat labore ullam incidunt atque
              similique excepturi quisquam distinctio, quas deleniti id
              corrupti. Obcaecati vero fuga quam doloremque necessitatibus ad
              eligendi. Asperiores molestias illo rerum facere suscipit,
              numquam, officia nihil voluptas deleniti tenetur inventore hic!
              Nobis quidem dolorum, iusto dolores earum velit nostrum
              perspiciatis, animi aperiam dignissimos consectetur porro ipsum
              beatae! Amet similique ipsum excepturi esse aperiam illo earum
              saepe culpa soluta? Animi at eos quibusdam optio porro officia
              laboriosam atque, rerum voluptatum excepturi impedit. Illum iste
              ex sequi delectus temporibus! Reprehenderit error, laudantium
              placeat officiis nam culpa consequuntur vero tempora saepe.
              Doloribus, itaque in! Recusandae, maiores! Dolore, maiores nobis
              eius quas et voluptas quos sint cupiditate maxime. Deserunt, cum
              consequuntur. Sit nihil natus, eius delectus fugiat repudiandae
              suscipit ipsa architecto veritatis esse doloribus ipsum eaque
              culpa vero quisquam voluptates dolor consectetur odit ab commodi
              laborum eos corrupti rem? Eveniet, eum. Tempore aperiam molestias,
              quo labore culpa, commodi quidem perspiciatis, necessitatibus
              corporis autem doloremque. Beatae, placeat iste natus, facere
              expedita sunt odio quidem facilis velit perferendis id neque,
              eveniet veritatis veniam! Unde, ipsum. Reiciendis aperiam eius
              porro minima suscipit magni, natus, blanditiis molestiae a beatae
              assumenda deserunt architecto dolor eum temporibus cum harum fugit
              ex. Harum dignissimos vero neque illum consequuntur. Voluptates,
              nesciunt officia soluta quo facere voluptas. Fugit tempore
              voluptatum fuga eius quam a ullam, porro minima aspernatur
              voluptatibus sequi tempora assumenda deleniti commodi libero
              laboriosam? Doloribus reiciendis accusantium in! Nemo, tempora!
              Quam illum repellat ea modi cupiditate! Obcaecati culpa similique
              ratione minus enim ullam amet pariatur debitis excepturi quaerat
              in vel, repellat animi labore praesentium vero iure. Facere,
              ducimus. Dolore officia velit ducimus fuga fugit molestiae
              pariatur perspiciatis illum iure repellat sapiente dicta totam
              debitis quisquam a adipisci quidem alias quo voluptatibus
              asperiores tempora, ex similique. Odit, alias explicabo?
              Architecto eveniet nam autem placeat cupiditate voluptate tempora
              perferendis? Doloremque, quasi odit consectetur quia adipisci
              amet! Est magni, recusandae placeat, quibusdam autem rerum nobis
              porro, voluptatibus expedita suscipit laudantium debitis! Minus ab
              labore deleniti optio rem placeat quas consequuntur nam numquam,
              beatae corrupti fuga praesentium, eius, excepturi neque fugit
              velit aperiam consequatur aliquid eaque! Sapiente ratione pariatur
              eaque placeat aut? At, quisquam. Iure eius dolore earum aliquid
              placeat labore commodi quisquam molestias accusamus! Ducimus ex
              quaerat debitis maiores neque labore ea voluptates, magnam impedit
              dolorem odio quam harum fugiat dolor. Porro nam quo, veniam quis
              optio culpa voluptas corporis saepe omnis expedita ipsam minima
              perspiciatis recusandae alias dolor dolores nisi, voluptatum sed?
              Tempora accusantium eveniet optio amet quos ab aliquid. Blanditiis
              sit hic accusamus nesciunt nulla placeat perferendis ut quos,
              earum in cupiditate vel, optio repellendus, exercitationem nam
              dolorum? Eos commodi eaque eveniet. Esse distinctio non debitis,
              provident ut ab. Dolorem, sint labore, expedita voluptates odio
              maxime facere perspiciatis veniam iste, molestiae maiores a nisi
              dolorum aut id architecto tenetur cumque? Provident laudantium sit
              suscipit reiciendis vero cum cupiditate deserunt. Rem nemo
              obcaecati sapiente facere sunt quis eos, laborum minima harum
              quibusdam quidem neque expedita repellat? Dolor neque obcaecati,
              architecto repellendus impedit ipsam repudiandae tempora est autem
              magnam delectus iusto! Quaerat sint dolores itaque possimus
              adipisci facere molestias voluptatibus. Quo incidunt doloremque
              deserunt explicabo at ad soluta omnis illum alias voluptatem nemo,
              inventore debitis sequi. Accusantium sed provident modi quibusdam.
              Quasi eos numquam fugit assumenda voluptatem voluptatibus
              consectetur nam fuga explicabo soluta corrupti, cum nulla neque
              magnam fugiat voluptate necessitatibus itaque consequatur error
              animi tenetur molestiae! Rerum beatae facilis sunt. Et
              perspiciatis necessitatibus quibusdam cumque voluptatem asperiores
              quidem alias veniam sint ipsam quasi quia beatae modi recusandae
              delectus impedit enim ipsa, consequatur tempora neque eaque
              expedita temporibus omnis? Eos, animi. Sunt praesentium architecto
              odio molestiae sit amet nulla id voluptate, dignissimos repellat
              possimus obcaecati dolorem quisquam cumque minus, eum unde!
              Voluptates, ipsum. Sint nemo omnis iste, quas aspernatur voluptate
              voluptatum. Libero placeat voluptates laboriosam quisquam dolore
              cumque adipisci quis officiis amet, mollitia magni numquam nobis
              laudantium, consequatur deleniti cupiditate nisi iusto blanditiis!
              Illum quasi, sunt sit deserunt corrupti enim iste! Libero aliquam,
              quidem ab hic odio perferendis fugiat ipsam consequuntur facilis,
              repellendus ducimus explicabo minus suscipit quam deleniti
              possimus amet harum debitis totam. Commodi nostrum dolore
              molestiae reiciendis iste necessitatibus! Ipsum ad assumenda,
              repellendus quasi, iure rem fuga ea unde sit eveniet aspernatur
              aliquid asperiores hic tempore obcaecati. Libero praesentium ipsa
              consequatur reiciendis beatae rerum ullam dolorum illum pariatur
              blanditiis? Nobis ducimus totam assumenda, deserunt minima quam
              quia architecto quaerat tenetur cupiditate saepe corporis fugit
              laboriosam. Tempore, molestias eius nisi quisquam minima, minus
              accusamus impedit commodi laudantium, sed ipsum ea? Esse iste quod
              commodi sed, adipisci magni eligendi dolorum rem similique odio
              earum dolor dignissimos cumque deleniti aliquam maiores nostrum
              nulla. Iusto autem dolor, est ea quisquam facere tempore
              recusandae. Labore libero quia quasi similique sed facilis
              exercitationem tempora cupiditate, nostrum molestias aliquam ad
              dolorum rem odio ducimus adipisci incidunt cum! Voluptatum, ea ut
              adipisci cupiditate ex aliquam expedita ducimus. Harum eaque
              laudantium vel odit at quibusdam eligendi laborum veritatis
              consequuntur reprehenderit nihil ea officiis consectetur
              perspiciatis, exercitationem quia alias corporis praesentium
              quisquam saepe nam eos libero. Praesentium, pariatur omnis. Dolor
              culpa laborum magnam odit enim minima quod, repellendus porro
              aspernatur fugiat quaerat cupiditate impedit rerum modi sit
              aperiam ab, aut quam, ex atque tempora eum molestias? Commodi,
              quisquam modi? Voluptatibus distinctio quae ad voluptate
              laboriosam officiis debitis ipsum! Obcaecati magnam, voluptatem
              temporibus nam debitis non assumenda animi cupiditate perferendis
              nihil nesciunt asperiores? Nobis obcaecati ea sunt omnis
              doloremque dignissimos! Vel possimus sequi pariatur. Recusandae
              quas aliquid est at labore libero distinctio dolor porro, autem
              nobis. Facilis tempore tempora ipsum similique vitae, cumque iusto
              libero fugit quibusdam amet! Pariatur, consequatur. Mollitia,
              molestias iusto aperiam dolorem, nemo molestiae, ea voluptatem
              itaque adipisci qui neque unde asperiores perferendis vero sint
              necessitatibus iste eos similique voluptatum sapiente. Saepe
              inventore nemo ipsum maxime reiciendis! Voluptates quia assumenda
              dolorum est iste sed laborum officiis? Reiciendis error architecto
              et, ipsum earum voluptate quos, assumenda sit quaerat aperiam qui
              dolorem beatae porro! Est doloremque dolores provident esse? Dolor
              quod officiis quas quibusdam voluptates commodi cupiditate ipsa
              culpa provident. Accusantium at perspiciatis numquam, tempora
              dolores, aliquam voluptatem quaerat animi a architecto, quod
              similique ratione quis maxime iusto nam! Minima impedit
              voluptates, assumenda laborum pariatur, provident quam earum
              temporibus ipsum fugit hic voluptas aliquid qui ex dolores! Sed
              dolore natus officiis voluptas veritatis quas ex nesciunt saepe
              quaerat id? Alias voluptates possimus, suscipit, doloribus
              voluptate exercitationem aliquam quidem, dicta repellat omnis
              delectus ipsa corrupti officia laboriosam sit facilis
              necessitatibus reprehenderit optio iusto maiores ducimus! Vero,
              voluptatum rem. Ab, cumque! Aut, distinctio id sapiente, nostrum
              iste quo officia facilis hic eaque non placeat at, optio rem eos
              veritatis voluptate amet labore similique animi et nulla suscipit
              eius sed mollitia! Ex. Et in maiores autem repudiandae molestiae
              aut sequi animi, ducimus quo voluptatem fugiat similique dolor
              labore consectetur eligendi reiciendis inventore nesciunt.
              Assumenda sequi reprehenderit non qui illum fuga esse natus! Sequi
              voluptatem hic recusandae in quod labore nisi, vitae eaque aliquid
              non corrupti quos, rerum obcaecati veritatis? Quod similique
              laudantium, tempora sunt aliquam perferendis ex, quos voluptatem
              nam magni blanditiis. Consequuntur sunt atque nam voluptates
              expedita officia? Reiciendis labore, deserunt error alias quia
              velit blanditiis inventore, numquam modi quaerat pariatur harum
              explicabo consectetur itaque saepe? Nostrum sit ullam id
              dignissimos? Voluptate sequi fugit architecto maxime esse, dicta
              ratione velit blanditiis repellendus, voluptatibus commodi
              accusamus? Cumque, explicabo obcaecati. Non quibusdam cum,
              necessitatibus excepturi, consectetur distinctio numquam iste
              sequi dolorum voluptates totam? Quia repudiandae quae itaque
              architecto natus impedit, voluptatum optio laboriosam, dolorem
              quidem vel maiores voluptate dicta voluptates necessitatibus ipsa
              saepe sunt beatae! Alias, sint. Rem explicabo harum asperiores
              minima et! Quibusdam, sint obcaecati tempora magni amet, magnam
              consequuntur culpa ea quisquam alias ab aliquam earum sit esse
              quam officiis laboriosam! Quibusdam dolorum non earum blanditiis
              minima facere officiis corrupti expedita? Quae harum molestiae
              quis praesentium aperiam quos temporibus nesciunt. Quia inventore
              voluptatem quod illo quos soluta placeat maiores, ut temporibus
              dolorem aut accusamus tempora dolore? Quidem error minus omnis
              voluptas! Odio necessitatibus ipsum ratione optio vero vitae
              delectus? Ad exercitationem beatae facilis quia. Fuga, animi.
              Error dolor impedit quo doloribus, facilis, soluta quos voluptas
              placeat nemo nihil, ducimus provident quas. Nobis reiciendis
              accusantium et repellat earum vero, pariatur ipsum adipisci quidem
              doloribus beatae labore ducimus magnam, saepe aliquam distinctio,
              laborum consectetur modi iste deleniti. Aliquid explicabo
              cupiditate sapiente nam accusantium! Culpa dicta atque, possimus
              sint voluptas doloremque itaque animi beatae molestiae
              perspiciatis, ratione voluptatem nam sunt facilis sed excepturi
              quisquam amet minus labore saepe blanditiis ducimus odit suscipit.
              Hic, veritatis! Ullam libero cumque officiis quasi sed voluptas
              numquam nobis ex alias odit, repudiandae dolore exercitationem vel
              ducimus, doloribus qui eveniet! Aut aperiam sapiente repellat, eos
              dolores ipsum voluptatem illo. Reprehenderit. Aliquid numquam
              tempore quis ipsum eius. Tempora, ex unde cumque obcaecati, harum
              rerum repudiandae consectetur labore atque nesciunt et molestias
              quo delectus porro reiciendis magnam asperiores sit explicabo
              quisquam at! Veritatis exercitationem perspiciatis fuga quaerat
              molestiae modi ea expedita consequuntur placeat omnis sed
              perferendis porro aspernatur ducimus, quia tenetur vero
              voluptates. Perferendis, ex illo eius sunt atque repudiandae
              voluptatem recusandae. Ab suscipit, vitae error repellat pariatur
              consequatur voluptates labore quae voluptatibus, tempora nostrum
              facere sunt laudantium dolore ut blanditiis quas minus autem rem
              dolorum alias nobis. Illum dolorem porro sit. Qui optio doloribus
              atque ut sit itaque veniam maiores quo quasi praesentium sunt,
              necessitatibus, distinctio eligendi porro. Esse at impedit
              aperiam, repellendus quia obcaecati quis suscipit nemo, harum quas
              corrupti. Veritatis neque repellat vero, aut nulla qui unde ullam
              minima natus sapiente corporis assumenda! Reprehenderit laboriosam
              officiis, magni, adipisci omnis doloremque et veniam corrupti
              mollitia sed aliquam, cupiditate minus inventore. Earum, dolor
              molestiae cupiditate rerum non mollitia amet quia quasi obcaecati
              ab nisi eaque sunt? Aliquam, atque aspernatur reprehenderit
              distinctio obcaecati quae amet itaque dignissimos maiores? Magnam
              eos alias nobis. Assumenda, laboriosam officia ipsum aperiam
              omnis, ipsa praesentium tempore perspiciatis a libero quisquam ab
              corrupti expedita voluptatibus doloremque iste magni perferendis
              amet maiores molestiae nisi. Voluptate ipsum vero impedit odio?
              Suscipit neque ullam autem, doloribus porro earum pariatur totam
              nostrum ea quaerat minus omnis mollitia accusamus sequi
              consequatur, magnam repellat. Corrupti dolorum temporibus quo nisi
              tempore! Obcaecati, dignissimos doloribus. Delectus. Consequuntur
              ipsum omnis a ducimus, ratione provident magnam, assumenda,
              voluptatem optio quod ab. Minus, odit. Facilis, quidem? Dicta
              facere officia tempora eligendi culpa aperiam aspernatur nesciunt
              dolorum deleniti. Illum, mollitia? Totam iste officia beatae nisi
              consectetur molestias tempora rem, perferendis pariatur blanditiis
              similique ullam molestiae culpa quos exercitationem maxime
              incidunt! Non eius qui impedit odit aliquam accusamus sequi atque
              commodi. Eveniet corrupti nobis nam libero aut quidem natus
              reprehenderit ut quod architecto, distinctio nostrum numquam
              molestias nesciunt vitae quia officiis hic ducimus? Tempore
              eligendi sed hic doloremque quaerat dicta iste. In commodi fuga
              deleniti fugit voluptate dicta suscipit excepturi quaerat dolor
              pariatur omnis, delectus, repellat iure libero esse vel molestias
              corporis facere sequi ab eaque tempore numquam. In, labore esse!
              Obcaecati alias cumque at debitis tempora voluptates error
              quisquam quasi commodi, rerum, labore minus repudiandae. Tenetur
              expedita, porro aliquid fugit illum natus pariatur est error?
              Quidem nam amet aliquam veritatis? Explicabo, nemo molestias
              voluptas officiis quos animi eos nam excepturi? Accusamus,
              asperiores. Fugit veniam omnis est voluptate nihil odit. Quaerat
              enim id eveniet dolorum pariatur a quibusdam dolores quam maxime.
              Saepe a natus iure possimus repellendus mollitia corporis velit
              quod eum? Obcaecati perferendis reprehenderit sint provident id
              corporis quo fugiat ipsa totam dignissimos! Mollitia, quo nisi a
              reprehenderit amet unde. Distinctio id, iste rem blanditiis maxime
              quidem necessitatibus minus veniam, ad odio provident a, officiis
              quas modi alias incidunt quo porro officia? Quis sapiente tenetur
              incidunt, veniam quam qui repellat. Repellat repudiandae ratione
              itaque quo culpa eaque dolore quaerat illo. Id ad alias aut
              explicabo, perferendis, harum quidem perspiciatis incidunt porro
              odit, laborum optio ex iusto vero. Dicta, vero fugiat! Ullam
              incidunt quasi suscipit non, repellat quisquam aspernatur
              consequatur voluptates assumenda magnam cum maiores laborum sint
              unde nam sapiente, placeat tempora provident aperiam similique
              commodi! Quae maiores ex pariatur tempora! Dolorum consectetur
              omnis, atque, corporis maxime asperiores praesentium quibusdam
              impedit esse, quod quis provident illo unde soluta. Aut,
              aspernatur nesciunt nobis veniam magnam id. Sequi amet reiciendis
              aperiam error? Modi. Consequatur eius molestias qui ea doloremque
              quo tempore voluptate saepe, laboriosam itaque quia necessitatibus
              autem non aliquid nemo expedita illo, dicta corporis alias. Velit
              sint itaque odit harum consequuntur! Corrupti. Soluta, itaque
              explicabo, perspiciatis libero repellat nostrum velit quis laborum
              quidem dicta aut porro delectus eligendi. Commodi ducimus eius
              sequi repellendus. Non magnam ipsum hic numquam iusto quisquam quo
              excepturi? Expedita dolores, nesciunt similique ipsum, magnam
              perspiciatis cupiditate maiores minima accusantium, atque voluptas
              corrupti sequi ad. Excepturi vel amet perspiciatis magni natus
              iure. Perspiciatis voluptates repellat nulla necessitatibus
              nesciunt iste. Blanditiis veniam praesentium architecto sint
              excepturi? At omnis ducimus magni, assumenda vel officiis in
              maiores consequuntur. Blanditiis explicabo voluptas, quos
              inventore labore aspernatur, beatae perferendis nulla eligendi,
              obcaecati similique culpa. Cum natus quia sapiente saepe possimus
              nobis inventore minima expedita exercitationem error mollitia
              magnam enim aut sequi rem, animi nam perferendis. Earum vel
              voluptatibus vitae magnam dolore rerum nulla sequi. Error eum
              animi enim? Voluptatum est, optio alias cupiditate ex rem vitae,
              consequuntur voluptatibus veniam sunt facere. Ea nesciunt
              temporibus itaque, aperiam architecto animi fugiat quia iste
              possimus error et? Tempore provident ullam soluta molestias in qui
              neque molestiae aliquid dignissimos repellendus sapiente deleniti,
              unde mollitia illo possimus, reprehenderit quasi accusantium enim
              sequi maxime cum! Autem error expedita ab neque! Explicabo,
              repellat hic impedit sint autem incidunt odio ex ullam ipsam rem,
              necessitatibus accusantium neque. Libero laudantium voluptatem
              eligendi maiores dolore pariatur voluptate quos aut quia, itaque
              sed molestias quas. Possimus, recusandae animi. Aut perferendis
              aspernatur id quasi corporis nostrum voluptatum, quis soluta.
              Atque harum earum impedit, laboriosam corrupti inventore saepe
              perspiciatis ipsa illo, at, officia quidem recusandae soluta in!
              Ipsa accusamus facere voluptas dicta corrupti, perspiciatis
              architecto vero labore, quod ea at dolor illo tempore omnis,
              distinctio magnam dolorum quidem! Corrupti fugit distinctio
              nesciunt illum dolorem voluptatibus delectus natus. Cupiditate
              quisquam, quam nulla deleniti ducimus doloremque laborum, ex
              aliquid error quibusdam, animi aspernatur maxime fugiat. Voluptate
              minima maiores doloremque tenetur. Aperiam, error vel. Quidem sint
              necessitatibus illum dolorum corrupti. Asperiores rerum eius iste
              hic minima, magni odio, amet, ratione provident quaerat voluptatem
              porro. Eligendi deserunt adipisci tempora veniam aut magni
              similique a, perferendis nostrum minus illo ea animi mollitia.
              Aperiam suscipit quidem id porro fugiat saepe possimus accusantium
              illum, dolores pariatur libero, ipsam officiis doloribus! Minus
              officiis veniam illo iusto, facilis ut dignissimos, culpa alias
              nesciunt, laboriosam aspernatur dicta. Quaerat quos nihil
              consectetur accusantium. Quaerat, perspiciatis reiciendis nemo
              unde esse quo, voluptatibus accusantium dolorem quos quis quam
              dignissimos? Totam quas accusamus omnis commodi minus dignissimos
              obcaecati molestiae dolores esse! Distinctio beatae mollitia sunt
              facere reiciendis error quam, in ipsa, consequatur earum a. Ipsum
              accusantium, natus tenetur incidunt eligendi consequatur suscipit
              quis dolor assumenda. Velit suscipit dignissimos odio quod vel?
              Expedita possimus amet harum quae tenetur quibusdam aut ad
              reprehenderit nisi similique tempore et, eligendi eius? A quos
              laborum culpa doloremque veniam facere vero ex. Provident facere
              pariatur excepturi labore. Dolorum repudiandae tenetur illum iusto
              quod qui est ea obcaecati, nobis aspernatur autem optio,
              consequuntur eveniet impedit magnam ullam numquam blanditiis
              possimus dolor laudantium quo omnis consectetur. Natus, blanditiis
              atque? Voluptate quos inventore quaerat ullam, ratione iure
              dolorem quibusdam doloremque nostrum esse ipsum aspernatur ad sint
              molestiae sunt nam illo ut perspiciatis consequatur neque iusto
              eum officia! Placeat, eaque praesentium. Eos fuga error totam
              dolor iure suscipit voluptatem voluptates consequuntur! Ipsam
              velit inventore natus molestiae. Fugiat praesentium tempora,
              dolore vitae rerum cum necessitatibus sed deserunt perferendis,
              soluta id officiis repellat. Nobis blanditiis consequatur
              distinctio aliquam animi necessitatibus, dolorum rem impedit,
              similique expedita, architecto dolorem neque voluptatem ea
              laudantium alias molestias libero beatae corporis ut? Beatae eum
              voluptatibus ullam natus sapiente! Voluptate distinctio provident
              exercitationem sit ducimus quisquam necessitatibus quos porro, hic
              explicabo ex expedita pariatur minima ab maiores, consectetur sunt
              itaque placeat fugit optio? Adipisci blanditiis assumenda quam cum
              reiciendis?
            </div>
          </form>
        </div>
        <Button className="">DECLINAR</Button>
        <Button className="ml-2">ACEPTAR</Button>
      </div>
    </>
  );
}
export function GameRecover() {
  return (
    <>
      <div className="game-dialog-whiter-border-box">
        <div className="box-top-title-actions">
          <div className="flex-wrapper">
            <div className="box-title">recuperar contraseña</div>
            <div className="box-actions">
              <a href="/" className="red-link">
                Cerrar
              </a>
            </div>
          </div>
        </div>
        <div className="game-dialog-register-form">
          <form>
            <input
              type="text"
              className="withMetaIcon"
              placeholder="BILLETERA"
            />
            <Button className="w-full mt-1">enviar</Button>
          </form>
        </div>
      </div>
    </>
  );
}
