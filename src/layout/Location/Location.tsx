import styled from '@emotion/styled';
import data from 'data.json';
import Address from './Address.tsx';
import Map from './Map.tsx';
import MapButtons from './MapButtons.tsx';
import { Caption, PointTitle } from '@/components/Text.tsx';
import parkingImage from '@/assets/images/park.jpg'; // ✅ 이미지 경로 추가

const Location = () => {
  const { mapInfo } = data;
  return (
    <LocationWrapper>
      <PointTitle>{mapInfo.address1}</PointTitle>
      <Caption textAlign={'center'}>{mapInfo.address2}</Caption>
      <Map />
      {/* ✅ 이미지 삽입 */}
      <img
        src={parkingImage}
        alt="주차장 안내"
        style={{ width: '100%', marginTop: '12px', borderRadius: '8px' }}
      />
      <MapButtons />
      <Address />
    </LocationWrapper>
  );
};

export default Location;

const LocationWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;