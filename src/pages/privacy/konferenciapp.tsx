import { Page } from "@/src/layout/Page";
import { ListItem, OrderedList, Text, Link } from "@chakra-ui/react";

export default function CmschTrackerPrivacy() {
  return (
    <Page
      title="Privacy policy - KonferenciApp"
      description="CMSch Tracker or Bacon is a location tracking app for CMSch, a CMS for events in the Schönherz dormitory"
      keywords={["cmsch", "app", "privacy policy", "data", "location"]}
    >
      <Text>Érvényes ettől: 2024. 03. 19.</Text>
      <Text>
        Köszönjük, hogy használod a Konferencia alkalmazást. Az alábbiakban
        részletezzük az alkalmazás által kezelt adatokat és azok védelmét.
      </Text>
      <OrderedList>
        <ListItem>Gyűjtött adatok</ListItem>
        <Text>
          Az alkalmazás nem gyűjt semmilyen személyes adatot a felhasználókról.
          Semmilyen formában nem tárolunk vagy rögzítünk olyan információkat,
          amelyek egyének azonosítására alkalmasak lennének.
        </Text>
        <ListItem>Kérdések</ListItem>
        <Text>
          Az alkalmazás lehetővé teszi a felhasználók számára, hogy anonim
          üzeneteket (kérdéseket) küldjenek az eseményeken belül. Ezek az
          üzenetek kizárólag az eseményeken belül érhetők el, és semmilyen
          személyes adatot nem tartalmaznak. A felhasználók által küldött
          üzeneteket nem tároljuk hosszabb ideig, és azok nem köthetők vissza
          egy adott felhasználóhoz.
        </Text>
        <ListItem>Látogatószám</ListItem>
        <Text>
          Az alkalmazás anonim módon gyűjti az események látogatószámát. Ezek az
          adatok kizárólag statisztikai célokat szolgálnak, és nem köthetők
          vissza egy adott felhasználóhoz.
        </Text>
        <ListItem>Harmadik felek</ListItem>
        <Text>
          Az alkalmazás nem oszt meg semmilyen adatot harmadik felekkel. Minden
          kommunikáció és tevékenység kizárólag az alkalmazás által biztosított
          platformon belül történik.
        </Text>
        <ListItem>Cookie-k és nyomkövetés</ListItem>
        <Text>
          Az alkalmazás nem használ sütiket (cookie-kat) vagy más nyomkövetési
          eszközöket a felhasználók tevékenységének nyomon követésére.
        </Text>
        <ListItem>Felhasználói jogok</ListItem>
        <Text>
          A felhasználóknak joga van az alkalmazásban tárolt információikhoz
          való hozzáféréshez, valamint azok törléséhez vagy módosításához. Mivel
          az alkalmazás nem tárol személyes adatokat, ezért nincs szükség külön
          jogi eljárásokra az ilyen kérések teljesítése érdekében. A törlés és
          módosítás kapcsoaltában kérjük, vegye fel velünk a kapcsolatot velünk.
        </Text>
        <ListItem>Kapcsolat</ListItem>
        <Text>
          Amennyiben bármilyen kérdése vagy észrevétele van, forduljon hozzánk
          itt:{" "}
          <Link color="orange.500" href="mailto:hello@kir-dev.hu">
            hello[at]kir-dev.hu
          </Link>
          .
        </Text>
      </OrderedList>
    </Page>
  );
}
