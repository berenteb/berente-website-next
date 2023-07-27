import { Page } from "@/src/layout/Page";
import { ListItem, OrderedList, Text, Link } from "@chakra-ui/react";

export default function CmschTrackerPrivacy() {
  return (
    <Page
      title="Privacy policy - CMSch Tracker"
      description="CMSch Tracker or Bacon is a location tracking app for CMSch, a CMS for events in the Schönherz dormitory"
      keywords={["cmsch", "app", "privacy policy", "data", "location"]}
    >
      <Text>Effective Date: 2023. 07. 27.</Text>
      <Text>
        Thank you for using our location tracking app (&quot;App&quot;). This
        Privacy Policy is designed to help you understand how we collect, use,
        and protect your personal data in relation to our services. We are
        committed to safeguarding your privacy and ensuring the security of your
        information.
      </Text>
      <OrderedList>
        <ListItem>Information We Collect</ListItem>
        <Text>
          We may collect the following types of information when you use our
          App:
          <br />
          a. Location Information: The App collects real-time location data from
          your device, including GPS coordinates, altitude, accuracy, and other
          location-based information.
          <br />
          b. Account: We use the key you input to match your location with our
          services
        </Text>
        <ListItem>How We Use Your Information</ListItem>
        <Text>
          We use the collected information for the following purposes:
          <br />
          a. Location Tracking: We use your location information to provide
          location-based services, including real-time tracking and personalized
          content.
          <br />
          b. Data Pairing: We may pair your location data with your user account
          information to enhance our services and provide a more personalized
          experience.
        </Text>
        <ListItem>Data Sharing and Disclosure</ListItem>
        <Text>
          We do not share your personal information with third parties unless
          required by law or for the purposes mentioned in this Privacy Policy.
          We may share aggregated and anonymized data for analytical and
          statistical purposes.
        </Text>
        <ListItem>User Rights and Choices</ListItem>
        <Text>
          As a user, you have the following rights and choices:
          <br />
          a. Opt-Out: You can turn off location tracking within the App&apos;s
          main screen at any time.
          <br />
          b. Data Access: You may request access to the personal data we hold
          about you. We will provide this information within a reasonable time
          frame.
          <br />
          c. Data Deletion: You can request the removal of your personal data
          from our servers. Upon verification, we will delete your data from our
          records.
        </Text>
        <ListItem>Data Retention</ListItem>
        <Text>
          We retain your personal data only for a short period of time from the
          timestamp of the submission.
        </Text>
        <ListItem>Data Security</ListItem>
        <Text>
          We implement industry-standard security measures to protect your
          personal information from unauthorized access, loss, or misuse.
        </Text>
        <ListItem>Changes to this Privacy Policy</ListItem>
        <Text>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or for legal reasons.
        </Text>
        <ListItem>Contact Us</ListItem>
        <Text>
          If you have any questions, concerns, or requests regarding this
          Privacy Policy, please contact us at{" "}
          <Link color="orange.500" href="mailto:hello@kir-dev.hu">
            hello[at]kir-dev.hu
          </Link>
          .
        </Text>
      </OrderedList>
    </Page>
  );
}
