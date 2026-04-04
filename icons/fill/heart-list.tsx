import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HeartList({
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
          d="M16.25,15h-5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M9,14.25c0-.71,.337-1.337,.853-1.75-.516-.413-.853-1.04-.853-1.75,0-1.241,1.009-2.25,2.25-2.25h5c.087,0,.171,.016,.255,.026,.155-.604,.245-1.241,.245-1.914,.009-2.528-2.042-4.597-4.586-4.612-1.195,.015-2.324,.49-3.164,1.306-.84-.815-1.972-1.291-3.178-1.306-2.53,.015-4.582,2.084-4.572,4.609,0,5.253,5.306,8.429,6.932,9.278,.256,.133,.537,.2,.818,.2,.256,0,.51-.063,.748-.174-.456-.412-.748-1.001-.748-1.663Z"
          fill={fill}
        />
        <path
          d="M16.25,11.5h-5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default HeartList;
