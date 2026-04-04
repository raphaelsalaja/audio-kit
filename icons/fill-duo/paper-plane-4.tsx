import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PaperPlane4({
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
          d="M4.35093 16.0775L15.7936 10.1361C15.8015 10.1323 15.8093 10.1284 15.8171 10.1244C16.272 9.88773 16.4993 9.44384 16.499 9H4.21077L2.55293 14.5939C2.23441 15.6668 3.36133 16.5916 4.35093 16.0775Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M15.7936 10.1361C15.7983 10.1339 15.803 10.1316 15.8077 10.1292C15.8058 10.1302 15.8039 10.1311 15.8019 10.132C15.7992 10.1334 15.7964 10.1348 15.7936 10.1361Z"
          fill={fill}
        />
        <path
          d="M16.499 9C16.4987 8.55641 16.2712 8.11289 15.8166 7.87639L4.35072 1.92244C3.35827 1.40677 2.23727 2.33676 2.55293 3.40611L4.21077 9H16.499Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default PaperPlane4;
