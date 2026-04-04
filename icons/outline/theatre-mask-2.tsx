import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TheatreMask2({
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
          d="m9.8662,8.2217c-1.6289.7949-3.1357.9551-4.6025.4927-.2197-.0713-.459.02-.5781.2168-.1191.1973-.0889.4502.0742.6133.9258.9263,1.8486,1.394,2.7461,1.394.0771,0,.1553-.0034.2324-.0103.9893-.0898,1.918-.7539,2.7588-1.9731.1299-.187.1162-.438-.0322-.6104-.1494-.1724-.3955-.2222-.5986-.123Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m5.8945,6.5542c.2207.0723.458-.0205.5781-.2168.1191-.1973.0889-.4502-.0742-.6133-.4688-.4692-.9482-.6846-1.4307-.6401-.4883.0444-.9336.353-1.3232.9175-.1299.1875-.1162.438.0322.6104.0977.1133.2373.1738.3789.1738.0742,0,.1494-.0166.2197-.0508.5859-.2856,1.0996-.3447,1.6191-.1807Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m10.874,5.2559c-.4688-.4692-.9482-.686-1.4307-.6401-.4883.0444-.9336.353-1.3232.9175-.1299.1875-.1162.438.0322.6104.0977.1133.2373.1738.3789.1738.0742,0,.1494-.0166.2188-.0508.5889-.2861,1.1035-.3433,1.6201-.1807.2217.0708.458-.02.5781-.2168.1191-.1973.0889-.4502-.0742-.6133Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m2.5523,2.434c2.9898.1092,5.7034-.1671,8.641-.9026.5957-.1492,1.1888.2494,1.2527.8602l.5201,4.9729c.3159,3.0211-1.877,5.7263-4.8981,6.0422h0c-3.0211.3159-5.7263-1.877-6.0422-4.8981l-.5201-4.9735c-.0639-.6106.4332-1.1235,1.0467-1.1011Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m9.025,16.2913c.2931.0818.5944.1458.9071.1785,3.0211.3159,5.7263-1.877,6.0422-4.8982l.5201-4.9734c.0511-.4883-.2621-.9001-.7012-1.0396"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default TheatreMask2;
