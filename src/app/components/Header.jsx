import Link from "next/link";
import { Button } from "@/components/ui/button"
import {
  SignInButton,
  // SignUpButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { Menu, CircleUserRound, UserRound } from 'lucide-react';
import Cart from "./Cart";

export default function Header() {
  return (
    <>
      <header className="hidden md:flex justify-between items-center bg-white shadow-sm px-5 h-[var(--header-height)] relative">
        <div>
          <Link href='/'>
            <svg className="md:w-[200px] w-[150px]" viewBox="0 0 1782 388" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M413.54 122.78C405.25 102.67 391.78 86.68 373.62 74.68C370.35 72.52 367.01 70.52 363.61 68.67L327.48 74.86C336.16 79.61 344.05 85.56 350.82 93.2C358.04 101.34 363.47 110.48 366.78 120.91C371.73 136.57 371.83 152.31 368.28 168.22C364.63 184.6 357.67 199.51 348.6 213.54C338.97 228.43 327.4 241.64 314.18 253.43C296.76 268.97 277.52 281.76 256.47 291.86C241.67 298.95 226.39 304.74 210.41 308.62C200.23 311.1 189.96 312.96 179.51 314.06C166.86 315.4 154.26 315.17 141.67 313.82C133.07 312.9 124.65 311.09 116.37 308.49C106.29 305.33 96.8101 301.03 88.1101 295.02C71.1401 283.28 59.7901 267.56 55.1101 247.4C52.2301 235.02 52.1901 222.5 54.6001 209.96C58.0801 191.84 65.6001 175.45 75.6601 160.15C87.7401 141.83 102.83 126.28 119.89 112.56C135.19 100.25 151.82 90.13 169.55 81.81C180.99 76.44 192.78 71.98 204.96 68.45C217.01 64.96 229.2 62.46 241.62 60.97C245.84 60.45 250.1 60.23 254.34 59.92C254.96 59.87 255.6 60.01 256.24 60.06C256.43 60.29 256.62 60.52 256.81 60.75C226.5 105.35 196.18 149.96 165.86 194.57C165.6 194.55 165.35 194.53 165.09 194.52C164.91 193.82 164.59 193.12 164.61 192.44C164.69 188.77 164.87 185.1 165.01 181.44C165.03 180.66 165.01 179.89 164.99 178.96C164.31 178.83 163.76 178.68 163.19 178.64C153.38 177.95 143.58 177.29 133.78 176.56C132.24 176.45 131.03 176.79 129.85 177.86C121.78 185.14 113.66 192.38 105.56 199.62C101.31 203.43 97.0701 207.23 92.8301 211.04C92.3101 211.51 91.8301 212.03 91.0301 212.82C92.2301 213.11 93.0601 213.4 93.9301 213.52C100.68 214.4 107.44 215.22 114.2 216.09C122.13 217.1 130.05 218.15 137.96 219.14C145.11 220.04 152.26 220.87 159.41 221.77C167.01 222.72 174.59 223.75 182.19 224.71C188.88 225.56 195.57 226.38 202.26 227.23C212.86 228.56 223.44 229.91 234.04 231.24C241.7 232.21 249.38 233.13 257.04 234.1C264.12 235 271.18 235.98 278.26 236.86C283.01 237.46 287.76 237.94 292.5 238.46C293.01 238.52 293.53 238.42 294.39 238.39C292.81 219.86 291.25 201.46 289.66 182.94C288.54 182.81 287.72 182.66 286.89 182.62C269.8 181.93 252.71 181.16 235.62 180.69C232.93 180.61 230.13 181.68 227.5 182.61C214.97 187.05 202.49 191.62 189.99 196.12C189.03 196.47 188 196.6 187 196.84L308.65 78.09L317.1 69.84L331.37 55.92L339.16 48.31L388.66 0L374.98 0.36L324.71 1.7C316.08 2.02 307.44 2.36 298.81 2.62C296.99 2.68 295.85 3.4 294.82 4.92C285.17 19.19 275.45 33.41 265.69 47.6C265.12 48.42 264.05 49.22 263.1 49.39C260.28 49.86 257.4 50.01 254.53 50.3C241.36 51.63 228.34 53.85 215.45 56.94C199.86 60.68 184.74 65.7 169.92 71.75C153.02 78.63 136.74 86.76 121.31 96.5C113.34 101.54 105.44 106.71 97.8301 112.27C79.9001 125.39 63.6101 140.37 49.1301 157.23C35.6001 173 24.0101 190.09 15.2001 208.98C8.33005 223.72 3.13005 239.04 1.11005 255.2C-0.799947 270.35 -0.389947 285.49 3.45005 300.45C7.48005 316.18 14.8601 330.11 25.4201 342.33C33.9701 352.22 44.1801 360.17 55.5801 366.6C64.8501 371.83 74.5401 376.13 84.7301 379.09C91.8801 381.16 99.24 382.48 106.52 384.06C116.23 386.16 126.12 386.73 135.99 387.15C142.97 387.45 150 387.05 156.99 386.69C163.66 386.35 170.38 386.11 176.95 384.99C188.27 383.06 199.54 380.73 210.73 378.11C225.28 374.71 239.39 369.83 253.14 363.96C269.3 357.07 285.01 349.3 299.89 339.93C318.9 327.96 336.92 314.73 353.09 299.06C368.44 284.2 382.24 268.06 393.61 249.91C400.81 238.39 407.06 226.35 411.72 213.58C417.66 197.35 421.29 180.68 421.21 163.26C421.14 149.26 418.85 135.69 413.54 122.78Z" fill="#E61E25" />
              <path d="M585.39 215.63C617.94 201.29 626.21 181.16 626.21 157.44C626.21 122.68 600.56 90.97 551.19 90.97H456.86V284.04H511.47V221.43H530.5L575.46 284.04H635.59V280.73L585.39 215.63ZM551.74 180.88H511.47V134.54H551.19C565.53 134.54 572.43 146.4 572.43 158.54C572.43 170.68 566.08 180.88 551.74 180.88Z" fill="#231F20" />
              <path d="M705.92 144.47C668.96 144.47 630.07 166.54 630.07 216.19C630.07 265.84 666.48 287.07 709.51 287.07C732.95 287.07 755.29 279.62 771.57 264.45L746.74 236.6C737.92 243.22 726.61 247.63 711.71 247.63C700.68 247.63 684.96 242.39 681.37 230.25H776.53C788.12 176.47 754.19 144.47 705.92 144.47ZM681.65 197.71C684.96 175.37 729.64 176.19 731.02 197.71H681.65Z" fill="#231F20" />
              <path d="M881.61 145.3C866.44 144.47 848.24 149.16 836.66 162.4L834.45 147.78H789.21V340.86H839.96V272.45C847.41 281.56 860.38 287.07 877.75 287.07C917.47 287.07 943.95 257.56 943.95 215.91C943.95 174.26 921.61 147.78 881.61 145.3ZM866.17 245.97C848.24 245.97 838.86 231.08 838.86 214.53C838.86 200.19 849.07 186.12 866.17 186.12C881.34 186.12 893.47 196.88 893.47 215.91C893.47 234.94 881.34 245.97 866.17 245.97Z" fill="#231F20" />
              <path d="M1047.1 147.78V220.32C1047.1 238.25 1035.79 245.7 1023.65 245.7C1014.28 245.7 1004.62 239.91 1004.62 223.08V147.78H953.87V223.36C953.87 271.9 978.42 287.07 1007.1 287.35C1021.45 287.62 1038.55 282.66 1050.13 269.14L1052.34 284.04H1097.3V147.78H1047.1Z" fill="#231F20" />
              <path d="M1184.45 144.47C1147.49 144.47 1108.6 166.54 1108.6 216.19C1108.6 265.84 1145.01 287.07 1188.04 287.07C1211.48 287.07 1233.82 279.62 1250.1 264.45L1225.27 236.6C1216.45 243.22 1205.14 247.63 1190.24 247.63C1179.21 247.63 1163.49 242.39 1159.9 230.25H1255.06C1266.64 176.47 1232.72 144.47 1184.45 144.47ZM1160.18 197.71C1163.49 175.37 1208.17 176.19 1209.55 197.71H1160.18Z" fill="#231F20" />
              <path d="M1324.84 196.33C1316.56 196.05 1314.63 192.19 1314.63 189.71C1314.63 184.74 1319.6 183.09 1326.77 183.09C1337.8 182.81 1353.52 186.67 1360.97 191.36L1382.48 161.02C1369.25 151.09 1348.83 144.47 1326.77 144.47C1294.77 144.47 1263.88 156.33 1263.88 189.16C1263.88 221.99 1295.88 233.01 1322.36 233.84C1332.29 234.67 1336.7 236.87 1336.7 241.29C1336.7 245.71 1332.01 247.91 1322.91 247.91C1311.87 247.35 1295.33 246.25 1274.64 232.74L1258.09 269.7C1273.54 281 1300.29 287.62 1324.01 287.62C1356.83 287.62 1387.45 274.94 1387.45 241.29C1387.45 205.15 1353.25 197.16 1324.84 196.33Z" fill="#231F20" />
              <path d="M1488.39 240.73C1484.25 243.49 1478.46 245.42 1473.5 245.42C1465.77 245.42 1460.26 241.84 1459.98 232.18V187.5H1490.87V148.61H1460.26V109.17L1409.78 114.69V148.61H1387.99V187.5H1409.78V232.18C1408.96 274.94 1433.23 287.35 1460.26 287.35C1474.32 287.35 1487.84 284.86 1499.42 278.25L1488.39 240.73Z" fill="#231F20" />
              <path d="M1574.99 144.75C1535.55 144.75 1497.21 165.71 1497.21 216.19C1497.21 266.67 1535.83 287.35 1574.99 287.35C1614.15 287.35 1652.78 265.83 1652.78 216.19C1652.78 166.55 1615.26 144.75 1574.99 144.75ZM1574.99 245.7C1557.07 245.7 1546.86 231.91 1546.86 216.19C1546.86 200.47 1557.07 186.4 1574.99 186.4C1592.91 186.4 1603.13 200.46 1603.13 216.19C1603.13 232.74 1592.1 245.7 1574.99 245.7Z" fill="#231F20" />
              <path d="M1745.72 144.47C1732.48 144.47 1719.8 149.99 1712.62 162.68L1709.59 147.78H1664.08V284.04H1714.83V213.15C1714.83 195.22 1725.59 187.5 1738.28 187.5C1746.83 187.5 1752.89 189.16 1761.17 195.78L1781.58 159.09C1772.75 149.71 1759.51 144.47 1745.72 144.47Z" fill="#231F20" />
            </svg>
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <SignedOut>
            <SignInButton>
              <Button variant='link'>
                <UserRound className="mr-2"/>
                Mi cuenta
              </Button>
            </SignInButton>
            {/* <SignUpButton>
              <Button className='mr-2'>
                Registrarme
              </Button>
            </SignUpButton> */}
          </SignedOut>
        
          <SignedIn>
            <UserButton 
              appearance={{
                elements: {
                  userButtonAvatarBox: "md:w-10 md:h-10",
                }
              }}
            />
          </SignedIn>

          <Cart />
        </div>
  
      </header>
  
      <header className="bg-white shadow-sm px-4 h-[var(--header-height)] grid grid-cols-3 items-center md:hidden fixed t-0 l-0 w-full z-10">
        <div>
          <Menu className='text-brand-700' size={30}/>
        </div>

        <div className="grid place-content-center">
          <Link href='/'>
            <svg className="md:w-[200px] w-[150px]" viewBox="0 0 1782 388" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M413.54 122.78C405.25 102.67 391.78 86.68 373.62 74.68C370.35 72.52 367.01 70.52 363.61 68.67L327.48 74.86C336.16 79.61 344.05 85.56 350.82 93.2C358.04 101.34 363.47 110.48 366.78 120.91C371.73 136.57 371.83 152.31 368.28 168.22C364.63 184.6 357.67 199.51 348.6 213.54C338.97 228.43 327.4 241.64 314.18 253.43C296.76 268.97 277.52 281.76 256.47 291.86C241.67 298.95 226.39 304.74 210.41 308.62C200.23 311.1 189.96 312.96 179.51 314.06C166.86 315.4 154.26 315.17 141.67 313.82C133.07 312.9 124.65 311.09 116.37 308.49C106.29 305.33 96.8101 301.03 88.1101 295.02C71.1401 283.28 59.7901 267.56 55.1101 247.4C52.2301 235.02 52.1901 222.5 54.6001 209.96C58.0801 191.84 65.6001 175.45 75.6601 160.15C87.7401 141.83 102.83 126.28 119.89 112.56C135.19 100.25 151.82 90.13 169.55 81.81C180.99 76.44 192.78 71.98 204.96 68.45C217.01 64.96 229.2 62.46 241.62 60.97C245.84 60.45 250.1 60.23 254.34 59.92C254.96 59.87 255.6 60.01 256.24 60.06C256.43 60.29 256.62 60.52 256.81 60.75C226.5 105.35 196.18 149.96 165.86 194.57C165.6 194.55 165.35 194.53 165.09 194.52C164.91 193.82 164.59 193.12 164.61 192.44C164.69 188.77 164.87 185.1 165.01 181.44C165.03 180.66 165.01 179.89 164.99 178.96C164.31 178.83 163.76 178.68 163.19 178.64C153.38 177.95 143.58 177.29 133.78 176.56C132.24 176.45 131.03 176.79 129.85 177.86C121.78 185.14 113.66 192.38 105.56 199.62C101.31 203.43 97.0701 207.23 92.8301 211.04C92.3101 211.51 91.8301 212.03 91.0301 212.82C92.2301 213.11 93.0601 213.4 93.9301 213.52C100.68 214.4 107.44 215.22 114.2 216.09C122.13 217.1 130.05 218.15 137.96 219.14C145.11 220.04 152.26 220.87 159.41 221.77C167.01 222.72 174.59 223.75 182.19 224.71C188.88 225.56 195.57 226.38 202.26 227.23C212.86 228.56 223.44 229.91 234.04 231.24C241.7 232.21 249.38 233.13 257.04 234.1C264.12 235 271.18 235.98 278.26 236.86C283.01 237.46 287.76 237.94 292.5 238.46C293.01 238.52 293.53 238.42 294.39 238.39C292.81 219.86 291.25 201.46 289.66 182.94C288.54 182.81 287.72 182.66 286.89 182.62C269.8 181.93 252.71 181.16 235.62 180.69C232.93 180.61 230.13 181.68 227.5 182.61C214.97 187.05 202.49 191.62 189.99 196.12C189.03 196.47 188 196.6 187 196.84L308.65 78.09L317.1 69.84L331.37 55.92L339.16 48.31L388.66 0L374.98 0.36L324.71 1.7C316.08 2.02 307.44 2.36 298.81 2.62C296.99 2.68 295.85 3.4 294.82 4.92C285.17 19.19 275.45 33.41 265.69 47.6C265.12 48.42 264.05 49.22 263.1 49.39C260.28 49.86 257.4 50.01 254.53 50.3C241.36 51.63 228.34 53.85 215.45 56.94C199.86 60.68 184.74 65.7 169.92 71.75C153.02 78.63 136.74 86.76 121.31 96.5C113.34 101.54 105.44 106.71 97.8301 112.27C79.9001 125.39 63.6101 140.37 49.1301 157.23C35.6001 173 24.0101 190.09 15.2001 208.98C8.33005 223.72 3.13005 239.04 1.11005 255.2C-0.799947 270.35 -0.389947 285.49 3.45005 300.45C7.48005 316.18 14.8601 330.11 25.4201 342.33C33.9701 352.22 44.1801 360.17 55.5801 366.6C64.8501 371.83 74.5401 376.13 84.7301 379.09C91.8801 381.16 99.24 382.48 106.52 384.06C116.23 386.16 126.12 386.73 135.99 387.15C142.97 387.45 150 387.05 156.99 386.69C163.66 386.35 170.38 386.11 176.95 384.99C188.27 383.06 199.54 380.73 210.73 378.11C225.28 374.71 239.39 369.83 253.14 363.96C269.3 357.07 285.01 349.3 299.89 339.93C318.9 327.96 336.92 314.73 353.09 299.06C368.44 284.2 382.24 268.06 393.61 249.91C400.81 238.39 407.06 226.35 411.72 213.58C417.66 197.35 421.29 180.68 421.21 163.26C421.14 149.26 418.85 135.69 413.54 122.78Z" fill="#E61E25" />
              <path d="M585.39 215.63C617.94 201.29 626.21 181.16 626.21 157.44C626.21 122.68 600.56 90.97 551.19 90.97H456.86V284.04H511.47V221.43H530.5L575.46 284.04H635.59V280.73L585.39 215.63ZM551.74 180.88H511.47V134.54H551.19C565.53 134.54 572.43 146.4 572.43 158.54C572.43 170.68 566.08 180.88 551.74 180.88Z" fill="#231F20" />
              <path d="M705.92 144.47C668.96 144.47 630.07 166.54 630.07 216.19C630.07 265.84 666.48 287.07 709.51 287.07C732.95 287.07 755.29 279.62 771.57 264.45L746.74 236.6C737.92 243.22 726.61 247.63 711.71 247.63C700.68 247.63 684.96 242.39 681.37 230.25H776.53C788.12 176.47 754.19 144.47 705.92 144.47ZM681.65 197.71C684.96 175.37 729.64 176.19 731.02 197.71H681.65Z" fill="#231F20" />
              <path d="M881.61 145.3C866.44 144.47 848.24 149.16 836.66 162.4L834.45 147.78H789.21V340.86H839.96V272.45C847.41 281.56 860.38 287.07 877.75 287.07C917.47 287.07 943.95 257.56 943.95 215.91C943.95 174.26 921.61 147.78 881.61 145.3ZM866.17 245.97C848.24 245.97 838.86 231.08 838.86 214.53C838.86 200.19 849.07 186.12 866.17 186.12C881.34 186.12 893.47 196.88 893.47 215.91C893.47 234.94 881.34 245.97 866.17 245.97Z" fill="#231F20" />
              <path d="M1047.1 147.78V220.32C1047.1 238.25 1035.79 245.7 1023.65 245.7C1014.28 245.7 1004.62 239.91 1004.62 223.08V147.78H953.87V223.36C953.87 271.9 978.42 287.07 1007.1 287.35C1021.45 287.62 1038.55 282.66 1050.13 269.14L1052.34 284.04H1097.3V147.78H1047.1Z" fill="#231F20" />
              <path d="M1184.45 144.47C1147.49 144.47 1108.6 166.54 1108.6 216.19C1108.6 265.84 1145.01 287.07 1188.04 287.07C1211.48 287.07 1233.82 279.62 1250.1 264.45L1225.27 236.6C1216.45 243.22 1205.14 247.63 1190.24 247.63C1179.21 247.63 1163.49 242.39 1159.9 230.25H1255.06C1266.64 176.47 1232.72 144.47 1184.45 144.47ZM1160.18 197.71C1163.49 175.37 1208.17 176.19 1209.55 197.71H1160.18Z" fill="#231F20" />
              <path d="M1324.84 196.33C1316.56 196.05 1314.63 192.19 1314.63 189.71C1314.63 184.74 1319.6 183.09 1326.77 183.09C1337.8 182.81 1353.52 186.67 1360.97 191.36L1382.48 161.02C1369.25 151.09 1348.83 144.47 1326.77 144.47C1294.77 144.47 1263.88 156.33 1263.88 189.16C1263.88 221.99 1295.88 233.01 1322.36 233.84C1332.29 234.67 1336.7 236.87 1336.7 241.29C1336.7 245.71 1332.01 247.91 1322.91 247.91C1311.87 247.35 1295.33 246.25 1274.64 232.74L1258.09 269.7C1273.54 281 1300.29 287.62 1324.01 287.62C1356.83 287.62 1387.45 274.94 1387.45 241.29C1387.45 205.15 1353.25 197.16 1324.84 196.33Z" fill="#231F20" />
              <path d="M1488.39 240.73C1484.25 243.49 1478.46 245.42 1473.5 245.42C1465.77 245.42 1460.26 241.84 1459.98 232.18V187.5H1490.87V148.61H1460.26V109.17L1409.78 114.69V148.61H1387.99V187.5H1409.78V232.18C1408.96 274.94 1433.23 287.35 1460.26 287.35C1474.32 287.35 1487.84 284.86 1499.42 278.25L1488.39 240.73Z" fill="#231F20" />
              <path d="M1574.99 144.75C1535.55 144.75 1497.21 165.71 1497.21 216.19C1497.21 266.67 1535.83 287.35 1574.99 287.35C1614.15 287.35 1652.78 265.83 1652.78 216.19C1652.78 166.55 1615.26 144.75 1574.99 144.75ZM1574.99 245.7C1557.07 245.7 1546.86 231.91 1546.86 216.19C1546.86 200.47 1557.07 186.4 1574.99 186.4C1592.91 186.4 1603.13 200.46 1603.13 216.19C1603.13 232.74 1592.1 245.7 1574.99 245.7Z" fill="#231F20" />
              <path d="M1745.72 144.47C1732.48 144.47 1719.8 149.99 1712.62 162.68L1709.59 147.78H1664.08V284.04H1714.83V213.15C1714.83 195.22 1725.59 187.5 1738.28 187.5C1746.83 187.5 1752.89 189.16 1761.17 195.78L1781.58 159.09C1772.75 149.71 1759.51 144.47 1745.72 144.47Z" fill="#231F20" />
            </svg>
          </Link>
        </div>
        <div className="flex gap-4 justify-end items-center">
          <SignedIn>
            <UserButton 
              appearance={{
                elements: {
                  userButtonAvatarBox: "md:w-10 md:h-10",
                }
              }}
            />
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <CircleUserRound className="text-brand-700"/>
            </SignInButton>
          </SignedOut>

          <Cart />
        </div>
      </header>
    </>
  );
}