import { FilterQuery, Query } from 'mongoose';

class QueryBuilder<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;

  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.modelQuery = modelQuery;
    this.query = query;
  }

  byDate() {
    const query = this?.query?.byDate;
    const currentDate = new Date();
    if (query === 'daily') {
      const startDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate(),
      );
      const endDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate() + 1,
      );
      this.modelQuery = this.modelQuery.find({
        date: {
          $gte: startDate,
          $lte: endDate,
        },
      });
      return this;
    }
    if (query === 'weekly') {
      const startDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate() - currentDate.getDay(),
      );
      const endDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate() + (6 - currentDate.getDay()),
      );
      this.modelQuery = this.modelQuery.find({
        date: {
          $gte: startDate,
          $lte: endDate,
        },
      });
      return this;
    }
    if (query === 'monthly') {
      const startDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1,
      );
      const endDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0,
      );
      this.modelQuery = this.modelQuery.find({
        date: {
          $gte: startDate,
          $lte: endDate,
        },
      });
      return this;
    }
    if (query === 'yearly') {
      const startDate = new Date(currentDate.getFullYear(), 0, 1);
      const endDate = new Date(currentDate.getFullYear(), 11, 31);
      this.modelQuery = this.modelQuery.find({
        date: {
          $gte: startDate,
          $lte: endDate,
        },
      });
      return this;
    }
    return this;
  }
  sort() {
    const sort =
      (this?.query?.sort as string)?.split(',').join(' ') || '-createdAt';
    this.modelQuery = this.modelQuery.sort(sort);
    return this;
  }
  priceRange() {
    const range = this.query.priceRange || 10000000;

    this.modelQuery = this.modelQuery.find({
      productPrice: { $lte: Number(range) },
    });

    return this;
  }
  filter() {
    const query = { ...this.query };
    const excludeFields = ['sort', 'priceRange', 'byDate'];
    excludeFields.forEach((el) => delete query[el]);
    const fnQuery: Record<string, unknown> = {};

    Object.entries(query || {}).map((q) => {
      if (q[1]) {
        fnQuery[q[0]] = q[1];
      }
    });

    this.modelQuery = this.modelQuery.find(fnQuery as FilterQuery<T>);
    return this;
  }
}

export default QueryBuilder;
