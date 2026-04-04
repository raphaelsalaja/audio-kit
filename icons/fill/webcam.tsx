import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Webcam({
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
          d="M9,14c-3.584,0-6.5-2.916-6.5-6.5S5.416,1,9,1s6.5,2.916,6.5,6.5-2.916,6.5-6.5,6.5Zm0-11.5c-2.757,0-5,2.243-5,5s2.243,5,5,5,5-2.243,5-5-2.243-5-5-5Z"
          fill={fill}
        />
        <path
          d="M12.201,12.276c-.915,.615-2.016,.974-3.201,.974s-2.286-.359-3.201-.973l-1.492,2.441c-.283,.462-.294,1.043-.028,1.516,.265,.473,.766,.767,1.308,.767h6.826c.542,0,1.043-.293,1.308-.767,.266-.473,.255-1.053-.028-1.515l-1.491-2.442Z"
          fill={fill}
        />
        <circle cx="9" cy="7.5" fill={secondaryfill} r="2.5" />
      </g>
    </svg>
  );
}

export default Webcam;
