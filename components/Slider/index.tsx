import { SliderItem } from '../SliderItem';
import * as S from './styled';

export const Slider = () => {
  return (
    <S.Slider>
      <S.Main>
        <S.H2>
          {' '}
          IDS’s Knowledge Management Journey: Two Decades of Learning, Engagement, and Vision
        </S.H2>
        <S.Text>
          <S.H3>
            The first president of Asian Development Bank (ADB), Takeshi Watanabe, often emphasized
            that the bank was an institution that “learns before it teaches.”
          </S.H3>
          <S.P>
            Morbi sapien ex, tincidunt ut tincidunt et, luctus ac massa. In non dapibus ante. Nulla
            facilisi. Nunc sollicitudin viverra nibh nec malesuada. Maecenas elementum, magna eu
            semper efficitur, mauris lacus rhoncus orci, nec suscipit augue est ac nulla. Maecenas
            porttitor aliquet augue eget tincidunt. Donec tempor, lacus at accumsan accumsan, purus
            nisl malesuada sapien, nec placerat augue velit ut felis. Duis at enim suscipit, luctus
            nunc eu, varius lacus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Mauris eu lacus congue, lacinia leo non, facilisis
            tortor.
          </S.P>
        </S.Text>
      </S.Main>
      <SliderItem />
    </S.Slider>
  );
};
