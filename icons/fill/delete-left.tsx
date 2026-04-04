import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DeleteLeft({
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
          d="M13.25,3H5.477c-.53,0-1.026,.236-1.36,.649L.167,8.528c-.223,.275-.223,.668,0,.943l3.95,4.88c.334,.412,.83,.648,1.36,.648h7.773c1.517,0,2.75-1.233,2.75-2.75V5.75c0-1.517-1.233-2.75-2.75-2.75Zm-1.47,7.72c.293,.293,.293,.768,0,1.061-.146,.146-.338,.22-.53,.22s-.384-.073-.53-.22l-1.72-1.72-1.72,1.72c-.146,.146-.338,.22-.53,.22s-.384-.073-.53-.22c-.293-.293-.293-.768,0-1.061l1.72-1.72-1.72-1.72c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0l1.72,1.72,1.72-1.72c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061l-1.72,1.72,1.72,1.72Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default DeleteLeft;
