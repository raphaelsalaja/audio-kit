import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FileZip2({
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
          d="M15.487,5.427l-3.914-3.914c-.331-.331-.77-.513-1.237-.513H4.75c-1.517,0-2.75,1.233-2.75,2.75V14.25c0,1.517,1.233,2.75,2.75,2.75H13.25c1.517,0,2.75-1.233,2.75-2.75V6.664c0-.467-.182-.907-.513-1.237Zm-6.737,7.073h-1.75v1.5h1.75v1.5h-1.75v-1.5h-1.75v-1.5h1.75v-1.5h-1.75v-1.5h1.75v1.5h1.75v1.5Zm5.682-6h-2.932c-.55,0-1-.45-1-1V2.579c.009-.004,.004-.001,.013-.005l3.922,3.921s-.001,.003-.002,.005Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FileZip2;
