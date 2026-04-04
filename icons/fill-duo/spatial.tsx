import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Spatial({
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
          d="M2.75 9.144L5.75 10.8759V2.7682L3.37109 4.1478C2.52539 4.638 2 5.5497 2 6.5267V8.658L2.75 9.144Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M12.2497 14.3406V10.8766L5.22821 14.9304L7.61249 16.3008C8.45989 16.7881 9.51208 16.7873 10.3582 16.2987L12.204 15.233L12.2497 14.3406Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M12.0003 3.5153L9.0004 5.2474L16 9.3012V6.5512C15.9983 5.5737 15.488 4.6629 14.6418 4.1743L12.796 3.1086L12.0003 3.5153Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M8.9996 12.7526L2 8.6582V11.4487C2.0017 12.4262 2.51198 13.337 3.35818 13.8256L5.22821 14.9304L8.9996 12.7526Z"
          fill={fill}
        />
        <path
          d="M12 7.00001V15.3493L14.6289 13.852C15.4746 13.3618 16 12.4501 16 11.4731V9.30121L12 7.00001Z"
          fill={fill}
        />
        <path
          d="M5.7504 7.1234L12.796 3.1087L10.3875 1.6992C9.54011 1.2119 8.48792 1.2127 7.64182 1.7013L5.75 2.7684L5.7504 7.1234Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Spatial;
