import { useState, useRef } from 'react';
// @mui
import Box from '@mui/material/Box';
import Slider from 'react-slick';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Grid from '@mui/material/Grid';

const titleItems1 = [
  {
    avatar: '/assets/landing/questionAvatar.jpeg',
    title: '行銷企劃',
    description:
      'InfoCenter 的 CMS 系統極大提升了我們的網站管理效率。現在，無論是更新內容、推廣活動，還是分析行銷成效，都變得非常直觀和高效。這讓我們的團隊可以更專注於創造有影響力的行銷策略',
  },
  {
    avatar: '/assets/landing/questionAvatar.jpeg',
    title: '產品經理',
    description:
      '結合了 BPM 和 KM 的 InfoCenter 平台為產品管理帶來了革命性的進展。從產品開發到上市的每一個環節，我都能精準地追蹤進度並保存重要資料，對團隊的協同作業和知識共享至關重要',
  },
  {
    avatar: '/assets/landing/questionAvatar.jpeg',
    title: '公關負責人',
    description:
      '使用 InfoCenter 的 CRM 工具讓客戶關係管理變得前所未有的輕鬆。它不僅幫我們精確地追蹤客戶互動，還提供許多強大的功能來支持我們的溝通策略，無疑強化了我們的公關活動。',
  },
];
const titleItems2 = [
  {
    avatar: '/assets/landing/questionAvatar.jpeg',
    title: '活動主辦人',
    description:
      '自從使用 InfoCenter 的活動管理系統後，每一次的活動策劃到執行都變得井然有序。能即時掌握活動狀況並在後續活動中運用累積的資料，確實是策劃成功活動的強大工具。',
  },
  {
    avatar: '/assets/landing/questionAvatar.jpeg',
    title: '財務社工師',
    description:
      'CRM 系統使我們能夠有效地管理我們的個案。每一個客戶的需求和服務進度都一目了然，後續追蹤變得前所未有的簡單，這對於提升我們服務的質量和效率有極大的幫助。',
  },
  {
    avatar: '/assets/landing/questionAvatar.jpeg',
    title: '政府機關',
    description:
      'InfoCenter 提供的 KM 系統是我們文檔管理和人才發展計畫的核心。它的功能豐富且易於使用，幫助我們有效地存儲、檢索和共享大量文件，同時為員工提供一致的教育訓練標準。',
  },
];

const tutorialSteps = [{}, {}, {}, {}];

export default function HomeQuestion() {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = tutorialSteps.length;
  const carouselRef = useRef<Slider | null>(null);
  const settings = {
    dots: false, // Disable default dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex: number, newIndex: number) => setActiveStep(newIndex),
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
    if (carouselRef.current) {
      carouselRef.current.slickGoTo(step);
    }
  };
  return (
    <>
      <Grid
        sx={{
          height: '732px',
          backgroundColor: '#0C143D',
          mt: { xs: 6, md: 10 },
          mb: { xs: 5, md: 14 },
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
        }}
        id="customer-feedback"
      >
        <Grid container sx={{ minWidth: '1000px' }}>
          <Grid
            xs={6}
            sx={{
              height: '732px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Container sx={{ width: '590px', padding: '0px' }}>
              <Grid>
                <Typography sx={{ color: 'white', fontSize: '32px', fontWeight: 700 }}>
                  「與客戶共同慶祝每一次的成功」
                </Typography>
              </Grid>
              <Grid sx={{ display: 'flex', justifyContent: 'left' }}>
                <Typography
                  sx={{
                    fontFamily: 'Lato',
                    color: 'white',
                    fontSize: '20px',
                    lineHeight: '32px',
                    fontWeight: 400,
                    textAlign: 'left',
                    mt: '30px',
                  }}
                >
                  我們的產品不僅是工具，也是夥伴。這裡匯集了來自不同領域的客戶故事，展現他們如何利用
                  InfoCenter 實現目標，創造價值。
                </Typography>
              </Grid>
            </Container>
          </Grid>
          <Grid xs={6} sx={{ display: 'flex' }}>
            <Grid container>
              <Grid sx={{ paddingTop: '72px' }}>
                {titleItems1.map((item, index) => (
                  <Box
                    width={293}
                    height={238}
                    key={index}
                    sx={{ borderRadius: '12px', backgroundColor: '#1F264C', m: '20px', p: '15px' }}
                  >
                    <Grid sx={{ display: 'flex' }}>
                      <Grid
                        width={40}
                        height={40}
                        sx={{
                          borderRadius: '50%',
                          overflow: 'Hidden',
                        }}
                      >
                        <Image src={item.avatar} alt="" width={40} height={40} />
                      </Grid>
                      <Typography sx={{ color: 'white', fontSize: '14px', m: '10px' }}>
                        {item.title}
                      </Typography>
                    </Grid>
                    <Grid>
                      <Typography sx={{ color: 'white', fontSize: '13px', mt: '15px' }}>
                        {item.description}
                      </Typography>
                    </Grid>
                  </Box>
                ))}
              </Grid>
              <Grid sx={{ ml: '-18px', mt: '-20px' }}>
                {titleItems2.map((item, index) => (
                  <Box
                    width={293}
                    height={238}
                    key={index}
                    sx={{ borderRadius: '12px', backgroundColor: '#1F264C', m: '20px', p: '15px' }}
                  >
                    <Grid sx={{ display: 'flex' }}>
                      <Grid
                        width={40}
                        height={40}
                        sx={{
                          borderRadius: '50%',
                          overflow: 'Hidden',
                        }}
                      >
                        <Image src={item.avatar} alt="" width={40} height={40} />
                      </Grid>
                      <Typography sx={{ color: 'white', fontSize: '14px', m: '10px' }}>
                        {item.title}
                      </Typography>
                    </Grid>
                    <Grid>
                      <Typography sx={{ color: 'white', fontSize: '13px', mt: '15px' }}>
                        {item.description}
                      </Typography>
                    </Grid>
                  </Box>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid>
        <Box>
          <Typography sx={{ textAlign: 'center', fontSize: '32px', fontWeight: 700 }}>
            探索創新的實踐者
          </Typography>
          <Typography
            sx={{ textAlign: 'center', fontSize: '20px', fontWeight: 400 }}
            color="text.secondary"
          >
            精選案例突顯我們如何在不同產業中實現突破，與您一同探索與實踐創新
          </Typography>
        </Box>
        <Slider ref={carouselRef} {...settings}>
          {tutorialSteps.map((step, index) => (
            <Grid key={index}>
              <Grid
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Grid
                  sx={{
                    alignContent: 'center',
                    mt: '80px',
                    maxWidth: '1240px',
                    backgroundImage: `url('assets/landing/questionBackground.jpeg')`,
                    backgroundSize: 'cover',
                    borderRadius: '8px',
                  }}
                  spacing={2}
                >
                  <Grid sx={{ display: 'flex' }}>
                    <Box>
                      <Box sx={{ m: '28px' }}>
                        <Typography sx={{ color: 'white', fontSize: '23px', fontWeight: 400 }}>
                          快速實現知識共享與人才培養
                        </Typography>
                        <Typography
                          sx={{ color: 'white', fontSize: '16px', fontWeight: 400, mt: '40px' }}
                        >
                          使用 InfoCenter 後，機構的文件處理時間減少一半，培訓成本也節省三成，
                          同時員工學習成效明顯提升。透過強大的後台數據分析，
                          我們幫助該部門持續優化教育資源，使得每次培訓都能產生最大效益。
                        </Typography>

                        <Divider sx={{ mt: '80px', borderColor: 'white' }} />

                        <Typography
                          sx={{ mt: '30px', color: 'white', fontSize: '16px', fontWeight: 400 }}
                        >
                          政府機關
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Grid
                        sx={{
                          width: '480px',
                          height: '280px',
                          borderRadius: '8px',
                          backgroundImage: `url('/assets/landing/questionMark.jpeg')`,
                          backgroundSize: 'cover',
                          m: '40px',
                        }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Slider>
        <Box display="flex" justifyContent="center" sx={{ mt: '32px' }}>
          {Array.from({ length: maxSteps }).map((_, index) => (
            <Box
              key={index}
              sx={{
                width: 8,
                height: 8,
                mx: '12px',
                borderRadius: '50%',
                backgroundColor: index === activeStep ? 'primary.main' : 'grey.400',
                cursor: 'pointer',
              }}
              onClick={() => handleStepChange(index)}
            />
          ))}
        </Box>
      </Grid>

      <Grid container sx={{ mt: '248px' }}>
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'right' }}>
          <Grid
            sx={{
              backgroundImage: `url('/assets/landing/questionComputer.png')`,
              width: '555px',
              height: '320px',
              backgroundSize: 'cover',
              mr: '50px',
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography sx={{ fontSize: '32px', mt: '30px', fontWeight: 700 }}>
            5 分鐘內打造屬於你的營運系統！
            <br />
            30 天免費試用
          </Typography>
          <Typography sx={{ fontSize: '20px', mt: '10px', fontWeight: 400, maxWidth: '593px' }}>
            立即體驗全面的InfoCenter解決方案。免費試用,開啟您的數據驅動之旅
          </Typography>

          <Button
            size="large"
            variant="contained"
            sx={{
              mt: '42px',
              mb: '157px',
              width: '130px',
              height: '42px',
              backgroundColor: '#2065D1',
              fontSize: '15px',
              fontWeight: 400,
              alignItems: 'center',
            }}
          >
            免費體驗
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
