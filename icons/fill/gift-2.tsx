import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Gift2({
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
          d="M10.75,5.5c-.551,0-1,.449-1,1v1h1c.551,0,1-.449,1-1s-.449-1-1-1Z"
          fill={secondaryfill}
        />
        <path
          d="M8.25,6.5c0-.551-.449-1-1-1s-1,.449-1,1,.449,1,1,1h1v-1Z"
          fill={fill}
        />
        <path
          d="M9.75,4.212c.307-.135,.644-.212,1-.212,1.378,0,2.5,1.122,2.5,2.5,0,.356-.077,.693-.212,1h2.962V3.75c0-1.517-1.233-2.75-2.75-2.75h-3.5v3.212Z"
          fill={secondaryfill}
        />
        <path
          d="M8.25,10.061l-1.959,1.959c-.146,.146-.338,.22-.53,.22s-.384-.073-.53-.22c-.293-.293-.293-.768,0-1.061l1.959-1.959H2v5.25c0,1.517,1.233,2.75,2.75,2.75h3.5v-6.939Z"
          fill={secondaryfill}
        />
        <path
          d="M10.811,9l1.959,1.959c.293,.293,.293,.768,0,1.061-.146,.146-.338,.22-.53,.22s-.384-.073-.53-.22l-1.959-1.959v6.939h3.5c1.517,0,2.75-1.233,2.75-2.75v-5.25h-5.189Z"
          fill={fill}
        />
        <path
          d="M4.962,7.5c-.135-.307-.212-.644-.212-1,0-1.378,1.122-2.5,2.5-2.5,.356,0,.693,.077,1,.212V1h-3.5c-1.517,0-2.75,1.233-2.75,2.75v3.75h2.962Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Gift2;
