import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextUppercase({
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
          d="M13.688,14c-2.388,0-4.188-2.126-4.188-4.946,0-3.07,1.729-5.054,4.405-5.054,1.813,0,2.857,1.115,3.222,1.594,.251,.33,.188,.8-.143,1.051-.33,.251-.8,.187-1.051-.143-.285-.374-.927-1.002-2.028-1.002-1.819,0-2.905,1.329-2.905,3.554,0,1.997,1.131,3.446,2.688,3.446,.805,0,2.244,0,2.482-2.458h-2.374c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h3.158c.414,0,.75,.336,.75,.75,0,3.124-1.352,4.708-4.017,4.708Z"
          fill={secondaryfill}
        />
        <path
          d="M5.439,4.459c-.117-.278-.39-.459-.691-.459h-.178c-.302,0-.574,.181-.691,.459L.309,12.959c-.16,.382,.02,.822,.401,.982,.38,.16,.821-.018,.981-.401l.647-1.541H6.98l.647,1.541c.12,.287,.398,.459,.691,.459,.097,0,.195-.019,.29-.059,.382-.16,.562-.6,.401-.982L5.439,4.459Zm-2.471,6.041l1.691-4.025,1.691,4.025H2.969Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TextUppercase;
