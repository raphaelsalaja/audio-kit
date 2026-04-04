import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Sunset({
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
          d="M16.25,14.5H1.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h14.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
        <path
          d="M1.75,13h1.25c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75H1.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75Z"
          fill={fill}
        />
        <path
          d="M4.228,8.538c.146,.146,.339,.219,.53,.219,.192,0,.384-.073,.53-.22,.293-.293,.293-.768,0-1.061l-.885-.884c-.294-.292-.769-.292-1.061,0-.293,.293-.293,.768,0,1.061l.885,.884Z"
          fill={fill}
        />
        <path
          d="M13.242,8.757c.191,0,.384-.073,.53-.219l.885-.884c.293-.293,.293-.768,0-1.061-.293-.292-.768-.293-1.061,0l-.885,.884c-.293,.293-.293,.768,0,1.061,.146,.146,.338,.22,.53,.22Z"
          fill={fill}
        />
        <path
          d="M14.25,12.25c0,.414,.336,.75,.75,.75h1.25c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75h-1.25c-.414,0-.75,.336-.75,.75Z"
          fill={fill}
        />
        <path
          d="M8.47,6.78c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l2-2c.293-.293,.293-.768,0-1.061s-.768-.293-1.061,0l-.72,.72V1.25c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v3.189l-.72-.72c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l2,2Z"
          fill={secondaryfill}
        />
        <path
          d="M5.5,13h7c.414,0,.75-.336,.75-.75,0-2.343-1.906-4.25-4.25-4.25s-4.25,1.907-4.25,4.25c0,.414,.336,.75,.75,.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Sunset;
