import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleUserCheck({
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
          d="m15.6845,6.7539c-.0345-.0421-.1363-.0238-.1818.0253-.3806.4104-.9053.6677-1.4675.7135-.0405.0034-.1421.0073-.1826.0073-.5732,0-1.1191-.2153-1.5366-.6069l-1.6064-1.4976c-.4395-.4092-.6934-.9658-.7144-1.5669s.1934-1.1738.604-1.6138c.076-.0815-.9588-.4648-1.5991-.4648C4.996,1.75,1.75,4.9958,1.75,9c0,2.5928,1.3612,4.8679,3.408,6.1494.4779-1.6714,2.0171-2.895,3.842-2.895s3.3641,1.2236,3.842,2.895c2.0468-1.2815,3.408-3.5566,3.408-6.1494,0-.9026-.5655-2.2461-.5655-2.2461Zm-6.6845,2.9961c-1.1046,0-2-.8955-2-2s.8954-2,2-2,2,.8955,2,2-.8954,2-2,2Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m9,9.7505c1.105,0,2-.8954,2-2s-.895-2-2-2-2,.8954-2,2,.895,2,2,2Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m5.154,15.1475c.479-1.673,2.019-2.897,3.846-2.897s3.367,1.224,3.846,2.897"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m9.9606,1.8208c-.3151-.0417-.6341-.0708-.9606-.0708C4.996,1.75,1.75,4.9958,1.75,9s3.246,7.25,7.25,7.25,7.25-3.2461,7.25-7.25c0-.5928-.0789-1.1655-.2131-1.717"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="12.2436 3.75 13.8526 5.25 16.75 1.5"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default CircleUserCheck;
