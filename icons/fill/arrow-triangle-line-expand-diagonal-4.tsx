import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowTriangleLineExpandDiagonal4({
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
          d="M12.875,13.625c-.192,0-.384-.073-.53-.22L4.595,5.655c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0l7.75,7.75c.293,.293,.293,.768,0,1.061-.146,.146-.338,.22-.53,.22Z"
          fill={secondaryfill}
        />
        <path
          d="M15.383,10.18c-.375-.156-.802-.07-1.09,.217l-3.896,3.896c-.287,.287-.372,.715-.217,1.09s.518,.617,.924,.617h3.896c.551,0,1-.449,1-1v-3.896c0-.406-.242-.769-.617-.924Z"
          fill={fill}
        />
        <path
          d="M6.896,2H3c-.551,0-1,.449-1,1v3.896c0,.406,.242,.769,.617,.924,.125,.052,.255,.077,.384,.077,.26,0,.514-.102,.706-.293l3.896-3.896c.287-.287,.372-.715,.217-1.09s-.518-.617-.924-.617Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowTriangleLineExpandDiagonal4;
