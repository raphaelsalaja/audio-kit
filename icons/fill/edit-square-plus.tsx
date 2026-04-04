import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EditSquarePlus({
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
          d="M3.75,13c-.414,0-.75-.336-.75-.75V5.75c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v6.5c0,.414-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M12.25,15H5.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h6.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M14.25,13c-.414,0-.75-.336-.75-.75V5.75c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v6.5c0,.414-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M12.25,4.5H5.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h6.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M12,9c0-.414-.336-.75-.75-.75h-1.5v-1.5c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v1.5h-1.5c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h1.5v1.5c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-1.5h1.5c.414,0,.75-.336,.75-.75Z"
          fill={secondaryfill}
        />
        <rect
          height="4.5"
          width="4.5"
          fill={fill}
          rx="1.432"
          ry="1.432"
          x="1.5"
          y="12"
        />
        <rect
          height="4.5"
          width="4.5"
          fill={fill}
          rx="1.432"
          ry="1.432"
          x="1.5"
          y="1.5"
        />
        <rect
          height="4.5"
          width="4.5"
          fill={fill}
          rx="1.432"
          ry="1.432"
          x="12"
          y="1.5"
        />
        <rect
          height="4.5"
          width="4.5"
          fill={fill}
          rx="1.432"
          ry="1.432"
          x="12"
          y="12"
        />
      </g>
    </svg>
  );
}

export default EditSquarePlus;
