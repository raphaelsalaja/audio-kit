import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Export({
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
          d="M12.75,6.5h-3v5.5c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75V6.5h-3c-1.517,0-2.75,1.233-2.75,2.75v5c0,1.517,1.233,2.75,2.75,2.75h7.5c1.517,0,2.75-1.233,2.75-2.75v-5c0-1.517-1.233-2.75-2.75-2.75Z"
          fill={fill}
        />
        <path
          d="M6.53,4.78l1.72-1.72v3.439h1.5V3.061l1.72,1.72c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061L9.53,.72c-.293-.293-.768-.293-1.061,0l-3,3c-.293,.293-.293,.768,0,1.061s.768,.293,1.061,0Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Export;
