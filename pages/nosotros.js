import Layout from "../components/Layout";
import Image from "next/image";
import styles from "../styles/Nosotros.module.css";

const Nosotros = () => {
  return (
    <Layout pagina={"Nosotros"}>
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>

        <div className={styles.contenido}>
          <Image
            layout="responsive"
            width={600}
            height={450}
            src="/img/nosotros.jpg"
            alt="Nosotros_img"
          />

          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              fermentum facilisis fermentum. Donec porttitor vel sapien sed
              laoreet. Suspendisse suscipit ante sed odio suscipit, eget feugiat
              risus pharetra. Aliquam vitae mi at orci bibendum finibus. Fusce
              viverra felis non placerat efficitur. Ut eget blandit tellus. Cras
              interdum tortor a urna dictum, eu consectetur metus fermentum. Nam
              bibendum, nunc in laoreet luctus, ligula quam suscipit metus,
              pretium bibendum arcu augue quis est. Phasellus vitae scelerisque
              ante, sed mollis tortor.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              fermentum facilisis fermentum. Donec porttitor vel sapien sed
              laoreet. Suspendisse suscipit ante sed odio suscipit, eget feugiat
              risus pharetra. Aliquam vitae mi at orci bibendum finibus. Fusce
              viverra felis non placerat efficitur. Ut eget blandit tellus. Cras
              interdum tortor a urna dictum, eu consectetur metus fermentum.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
