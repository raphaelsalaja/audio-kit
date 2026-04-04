import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Loader5({
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
          d="m9,11.5c1.3807,0,2.5-1.1193,2.5-2.5s-1.1193-2.5-2.5-2.5-2.5,1.1193-2.5,2.5,1.1193,2.5,2.5,2.5Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m9.75,1.0381v4.0376c.5464.1038,1.0542.3147,1.4974.6165l2.8513-2.8513c-1.2042-.9985-2.7051-1.6492-4.3486-1.8027Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m5.0756,8.25c.1039-.5464.3149-1.0542.6166-1.4973l-2.8513-2.8513c-.9987,1.2041-1.6491,2.7051-1.8028,4.3486h4.0375Z"
          fill={fill}
          opacity=".25"
          strokeWidth="0"
        />
        <path
          d="m5.0756,9.75H1.038c.1537,1.6436.8041,3.1445,1.8028,4.3486l2.8513-2.8513c-.3017-.4431-.5127-.9509-.6166-1.4973Z"
          fill={fill}
          opacity=".38"
          strokeWidth="0"
        />
        <path
          d="m12.9244,9.75c-.1039.5464-.3148,1.0542-.6165,1.4973l2.8513,2.8513c.9987-1.2041,1.6491-2.7051,1.8028-4.3486h-4.0375Z"
          fill={fill}
          opacity=".75"
          strokeWidth="0"
        />
        <path
          d="m12.3079,6.7527c.3018.4431.5126.9509.6165,1.4973h4.0375c-.1537-1.6436-.8041-3.1445-1.8028-4.3486l-2.8513,2.8513Z"
          fill={fill}
          opacity=".88"
          strokeWidth="0"
        />
        <path
          d="m11.2473,12.3079c-.4432.3018-.9509.5127-1.4973.6165v4.0376c1.6435-.1536,3.1444-.8042,4.3486-1.8027l-2.8513-2.8513Z"
          fill={fill}
          opacity=".63"
          strokeWidth="0"
        />
        <path
          d="m8.25,12.9243c-.5464-.1038-1.0541-.3147-1.4973-.6165l-2.8513,2.8513c1.2042.9985,2.7051,1.6492,4.3486,1.8027v-4.0376Z"
          fill={fill}
          opacity=".5"
          strokeWidth="0"
        />
        <path
          d="m6.7526,5.6921c.4432-.3018.951-.5127,1.4974-.6165V1.0381c-1.6435.1536-3.1444.8042-4.3486,1.8027l2.8513,2.8513Z"
          fill={fill}
          opacity=".13"
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Loader5;
