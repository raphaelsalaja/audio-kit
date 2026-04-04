import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HeartHand({
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
          d="m11.1077,5.1111c.0826-.3533.1423-.717.1423-1.1052.006-1.5139-1.217-2.7468-2.733-2.7559-.912.012-1.76.4709-2.267,1.229-.507-.7571-1.355-1.217-2.267-1.229-1.516.009-2.739,1.2419-2.733,2.7559,0,2.0918,1.3028,3.686,2.579,4.7529"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m16.75,14.725c0-2.059-.236-3.639-1-4.223-.875-.669-3.152-.838-5.295-.232l-1.33-2.827c-.293-.626-1.037-.896-1.663-.603h0c-.625.292-.896,1.036-.604,1.661l2.561,5.456-2.724-.501c-.587-.108-1.167.224-1.371.785h0c-.232.637.098,1.34.736,1.569l2.616.941"
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

export default HeartHand;
