import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Church({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="m11,2h-1.25V.75c0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75v1.25h-1.25c-.4141,0-.75.3359-.75.75s.3359.75.75.75h1.25v1.75c0,.4141.3359.75.75.75s.75-.3359.75-.75v-1.75h1.25c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m16.2007,11.3247l-2.2007-1.4238v-1.3564c0-.5957-.2983-1.145-.7983-1.4692t-.001-.0005l-3.7935-2.4541c-.248-.1602-.5664-.1602-.8145,0l-3.7944,2.4546c-.5.3242-.7983.8735-.7983,1.4692v1.3564l-2.2007,1.4238c-.5005.3237-.7993.873-.7993,1.4692v3.4561c0,.4141.3359.75.75.75h6.5v-3.25c0-.4141.3359-.75.75-.75s.75.3359.75.75v3.25h6.5c.4141,0,.75-.3359.75-.75v-3.4561c0-.5962-.2988-1.1455-.7993-1.4692Zm-12.2007,4.1753h-1.5v-2.7061c0-.085.0425-.1636.1138-.2095l1.3862-.897v3.8125Zm11.5,0h-1.5v-3.8125l1.3862.897c.0713.0459.1138.1245.1138.2095v2.7061Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Church;
