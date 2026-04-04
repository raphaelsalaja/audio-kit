import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Volume({
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
          d="M14.35,1.567c-.4-.219-.889-.203-1.273,.044l-5.295,3.389h-3.531c-1.241,0-2.25,1.009-2.25,2.25v3.5c0,1.241,1.009,2.25,2.25,2.25h3.531l5.295,3.389c.205,.131,.439,.198,.675,.198,.206,0,.412-.051,.599-.153,.401-.219,.65-.64,.65-1.097V2.664c0-.457-.249-.877-.65-1.097Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Volume;
