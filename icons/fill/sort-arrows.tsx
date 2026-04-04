import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SortArrows({
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
          d="M9.932,1.916c-.475-.529-1.389-.529-1.863,0h0s-3.131,3.5-3.131,3.5c-.334,.373-.414,.887-.211,1.344,.204,.457,.642,.741,1.142,.741h6.264c.5,0,.938-.284,1.142-.741,.203-.457,.123-.971-.211-1.343l-3.131-3.5Z"
          fill={fill}
        />
        <path
          d="M12.132,10.5H5.868c-.5,0-.938,.284-1.142,.741-.203,.457-.123,.971,.211,1.343l3.131,3.5h0c.237,.265,.577,.417,.932,.417s.694-.151,.932-.417l3.131-3.499c.334-.373,.414-.887,.211-1.344-.204-.457-.642-.741-1.142-.741Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default SortArrows;
