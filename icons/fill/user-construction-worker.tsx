import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserConstructionWorker({
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
          d="M9,12c-2.413,0-4.672,1.078-6.2,2.957-.306,.376-.365,.883-.156,1.323,.212,.444,.647,.72,1.137,.72H14.219c.49,0,.925-.276,1.137-.72,.209-.44,.15-.947-.156-1.323-1.528-1.879-3.788-2.957-6.2-2.957Z"
          fill={secondaryfill}
        />
        <path
          d="M14,5.5h-.625c-.404-1.767-1.841-3.131-3.625-3.435v1.185c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75v-1.185c-1.784,.304-3.221,1.668-3.625,3.435h-.625c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h.551c.252,2.244,2.139,4,4.449,4s4.197-1.756,4.449-4h.551c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Zm-5,4c-1.483,0-2.71-1.084-2.949-2.5h5.899c-.24,1.416-1.466,2.5-2.949,2.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default UserConstructionWorker;
