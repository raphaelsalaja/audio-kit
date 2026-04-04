import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Butterfly({
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
          d="m8.75,10.5h-2.954c-1.6634,0-3.1613,1.2243-3.2868,2.883-.1448,1.9132,1.4446,3.5027,3.3578,3.3578,1.6587-.1256,2.883-1.6234,2.883-3.2868v-2.954Z"
          fill={secondaryfill}
          opacity=".2"
          strokeWidth="0"
        />
        <path
          d="m2.2344,2c-.4141,0-.75.3203-.75.7344l.0156,2.0156c0,2.6191,2.1309,5.75,4.75,5.75h2.75l-.0156-1.5156c0-4.4858-2.8623-6.9844-6.75-6.9844Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m15.7656,2c.4141,0,.75.3203.75.7344l-.0156,2.0156c0,2.6191-2.1309,5.75-4.75,5.75h-2.75s.0156-1.5156.0156-1.5156c0-4.4858,2.8623-6.9844,6.75-6.9844Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m9.25,10.5h2.954c1.6634,0,3.1613,1.2243,3.2868,2.883.1448,1.9132-1.4446,3.5027-3.3578,3.3578-1.6587-.1256-2.883-1.6234-2.883-3.2868v-2.954Z"
          fill={secondaryfill}
          opacity=".2"
          strokeWidth="0"
        />
        <path
          d="m11.6538,1.6323c-.2031-.3613-.6602-.4888-1.0215-.2861-.0601.0337-.9565.5513-1.6323,1.4805-.6758-.9292-1.5722-1.4468-1.6323-1.4805-.3604-.2017-.8154-.0757-1.0186.2842-.2041.3594-.0776.8169.2808,1.022.0161.0093,1.6201.9434,1.6201,2.3477v8c0,.4141.3359.75.75.75s.75-.3359.75-.75V5c0-1.4043,1.604-2.3384,1.6177-2.3462.3608-.2031.4893-.6606.2861-1.0215Z"
          fill={fill}
          strokeWidth="0"
        />
        <circle cx="5.5" cy="13.5" fill={fill} r="1" strokeWidth="0" />
        <circle cx="12.5" cy="13.5" fill={fill} r="1" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default Butterfly;
