import { Platform } from '../hooks/useGames';
import {
   FaWindows,
   FaPlaystation,
   FaXbox,
   FaApple,
   FaLinux,
   FaAndroid,
} from 'react-icons/fa';
import { SiNintendo } from 'react-icons/si';
import { MdPhoneIphone } from 'react-icons/md';
import { BsGlobe } from 'react-icons/bs';
import { HStack, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface Props {
   platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
   const iconMap: { [key: string]: IconType } = {
      // name: PlayStation, Xbox, etc. should match the platform slugs from the API
      // slug: playstation, xbox, etc.
      pc: FaWindows,
      playstation: FaPlaystation,
      xbox: FaXbox,
      nintendo: SiNintendo,
      mac: FaApple,
      linux: FaLinux,
      android: FaAndroid,
      ios: MdPhoneIphone,
      web: BsGlobe,
   };

   return (
      <>
         <HStack marginY={1}>
            {platforms.map((platform) => (
               <Icon
                  key={platform.id}
                  as={iconMap[platform.slug]}
                  color="gray.500"
               />
            ))}
         </HStack>
      </>
   );
};

export default PlatformIconList;
